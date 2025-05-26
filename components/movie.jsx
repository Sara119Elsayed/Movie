"use client";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaTrashAlt, FaPlusCircle, FaEdit } from "react-icons/fa";

export default function Movie() {
  const [moviesData, setMovieData] = useState([]);
  const router = useRouter();

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
          onClick={() => router.push("/addmovie")}
          title="Add New Movie"
          style={{ cursor: "pointer" }}
        />
      </div>

      <div className="row g-4">
        {moviesData.map((m) => (
          <div key={m.id} className="col-sm-6 col-md-4 col-lg-3">
            <div
              className="card h-100 border-0 rounded-4 shadow-sm"
              style={{
                cursor: "pointer",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onClick={() => router.push(`/movie/${m.id}`)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px) scale(1.03)";
                e.currentTarget.style.boxShadow =
                  "0 1rem 1.5rem rgba(0, 0, 0, 0.25)";
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
                height={600}
                className="card-img-top rounded-top-4"
                style={{ objectFit: "cover", height: "350px" }}
              />
              <div className="card-body d-flex flex-column p-3">
                <h5 className="card-title fw-bold text-truncate">{m.title}</h5>
                <p className="text-muted small mb-3">
                  ⭐ <strong>{m.vote_average}</strong> / 10
                </p>
                <div className="d-flex gap-2 mt-auto">
                  <button
                    className="btn btn-outline-success w-100 rounded-3"
                    onClick={(e) => {
                      e.stopPropagation(); 
                      router.push(`/editmovie/${m.id}`);
                    }}
                  >
                    <FaEdit className="me-1" /> Edit
                  </button>
                  <button
                    className="btn btn-outline-danger w-100 rounded-3"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(m.id);
                    }}
                  >
                    <FaTrashAlt className="me-1" /> Delete
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
