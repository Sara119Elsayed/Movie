"use client";
import React, { memo, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaTrashAlt, FaPlusCircle, FaEdit } from "react-icons/fa";

export default function Movie() {
  const [moviesData, setMovieData] = useState([]);
  const router = useRouter();
  const imgPath = "https://image.tmdb.org/t/p/w400/";

  useEffect(() => {
    fetch("api/movie")
      .then((res) => res.json())
      .then((data) => setMovieData(data));
  }, []);

  const handleDelete = (movieId) => {
    if (!window.confirm("Are you sure you want to delete this movie?")) return;

    fetch(`/api/movie/${movieId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((updatedData) => {
        setMovieData(updatedData);
      })
      .catch((error) => console.error("Error deleting movie:", error));
  };

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
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-dark fw-bold">Movies List</h2>
        <FaPlusCircle 
          size={32} 
          className="text-dark cursor-pointer" 
          onClick={() => router.push('/addmovie')} 
          style={{ cursor: 'pointer' }}
          title="Add New Movie"
        />
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {moviesData.map((m) => (
          <div key={m.id} className="col">
            <div className="card h-100 shadow-sm border-0 rounded-3">
              <Image 
                src={m.poster_path} 
                alt=""
                width={400} 
                height={600} 
                className="card-img-top rounded-top" 
                style={{ objectFit: "cover", height: "400px" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-truncate fw-bold">{m.title}</h5>
                <p className="card-text text-muted mb-3">
                  ⭐ <strong>{m.vote_average}</strong> / 10
                </p>
                <div className="d-flex justify-content-between mt-auto">
                  <button 
                    className="btn btn-outline-primary flex-grow-1 me-2" 
                    onClick={() => router.push(`/movie/${m.id}`)}
                  >
                    See More
                  </button>
                  <button 
                    className="btn btn-outline-success flex-grow-1 me-2" 
                    onClick={() => router.push(`/editmovie/${m.id}`)}
                  >
                    <FaEdit /> Edit
                  </button>
                  <button 
                    className="btn btn-outline-danger flex-grow-1" 
                    onClick={() => handleDelete(m.id)}
                  >
                    <FaTrashAlt /> Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
