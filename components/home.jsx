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
    fetch("/api/movie")
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
      <section className="container-fluid py-5 text-white" style={{ backgroundColor: "#121212" }}>
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
            <h1 className="display-4 fw-bold">
              Discover <span className="text-warning">Top Movies</span>
            </h1>
            <p className="lead text-muted">
              Browse a curated list of trending and top-rated movies. Click below to start exploring.
            </p>
            <button
              className="btn btn-warning btn-lg mt-3 px-5 py-2 rounded-3 fw-semibold"
              onClick={() => router.push("/movie")}
            >
              Show Movies
            </button>
          </div>
          <div className="col-lg-6">
            <div className="position-relative overflow-hidden rounded-4 shadow-lg">
              <SliderMovie images={moviesData} />
            </div>
          </div>
        </div>
      </section>
      <section className="container py-5">
        <h2 className="mb-4 fw-bold text-center text-dark">Top Rated Movies</h2>
        <div className="row g-4">
          {moviesData.map((m) => (
            <div key={m.id} className="col-sm-6 col-md-4 col-lg-3">
              <div
                className="card h-100 border-0 rounded-4 overflow-hidden shadow-sm movie-card"
                onClick={() => router.push(`/movie/${m.id}`)}
                style={{ transition: "0.3s", cursor: "pointer" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
                  e.currentTarget.style.boxShadow = "0 1rem 1.5rem rgba(0, 0, 0, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "0 .5rem 1rem rgba(0, 0, 0, 0.1)";
                }}
              >
                <Image
                  src={m.poster_path}
                  alt={m.title}
                  width={400}
                  height={400}
                  className="card-img-top rounded-top-4"
                  style={{ height: "300px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column justify-content-between p-3">
                  <h5 className="card-title fw-bold text-truncate">{m.title}</h5>
                  <p className="text-muted small mb-2">
                    <strong>Rating:</strong> ⭐ {m.vote_average}
                  </p>
                  <button
                    className="btn btn-outline-primary w-100 mt-auto rounded-3"
                    onClick={(e) => {
                      e.stopPropagation();
                      router.push(`/movie/${m.id}`);
                    }}
                  >
                    See Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default memo(Homepage);
