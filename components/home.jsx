"use client";
import React, { memo, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";
import SliderMovie from "./slidermovie";
import { useRouter } from "next/navigation";

function Homepage() {
  const [moviesData, setMovieData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch("api/movie")
      .then((res) => res.json())
      .then((data) => setMovieData(data));
  }, []);

  if (!moviesData?.length) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="spinner-border text-dark" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <div className="container-fluid py-5 text-white" style={{ backgroundColor: "#1C1C1C" }}>
        <div className="row align-items-center justify-content-between">
          <div className="col-md-6 text-md-start text-center mb-4 mb-md-0">
            <h1 className="display-4 fw-bold">
              Popular <span className="text-warning">Movies</span>
            </h1>
            <p className="lead text-muted">
              Discover the latest and most popular movies. Click the button below to explore.
            </p>
            <button 
              className="btn btn-warning btn-lg mt-3 px-4" 
              onClick={() => router.push('/movie')}>
              Show Movies
            </button>
          </div>
          <div className="col-md-6">
            <div className="position-relative overflow-hidden rounded-4 shadow-lg">
              <SliderMovie images={moviesData} />
            </div>
          </div>
        </div>
      </div>

      {/* Movies List Section */}
      <div className="container mt-5">
        <h2 className="mb-4 text-center">Top Rated Movies</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {moviesData.map((m) => (
            <div key={m.id} className="col">
              <div className="card bg-white shadow-sm border-0 rounded-lg overflow-hidden h-100">
                <div className="position-relative">
                  <Image 
                    src={m.poster_path} 
                    alt={m.title} 
                    width={400} 
                    height={400} 
                    className="card-img-top object-fit-cover"
                    style={{ height: "300px", objectFit: "cover" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-truncate fw-bold">{m.title}</h5>
                  <p className="card-text text-muted mb-2">
                    <strong>Rating:</strong> ⭐ {m.vote_average}
                  </p>
                  <button 
                    className="btn btn-outline-primary w-100" 
                    onClick={() => router.push(`/movie/${m.id}`)}>
                    See Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default memo(Homepage);
