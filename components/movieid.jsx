"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function MovieID() {
  const { movieid } = useParams();
  const [moviedata, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/movie/${movieid}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        setMovie(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [movieid]);

  if (loading)
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div
          className="spinner-border text-info"
          role="status"
          aria-label="Loading"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );

  if (!moviedata)
    return (
      <div className="text-center mt-5">
        <h3 className="text-danger">Movie not found</h3>
      </div>
    );

  return (
    <div className="container mt-5">
      <div className="card shadow-lg rounded-4 overflow-hidden">
        <div className="row g-0">
          <div className="col-md-4 position-relative" style={{ minHeight: "450px" }}>
            <Image
              src={moviedata.poster_path || "/placeholder.png"}
              alt={moviedata.title || "Movie poster"}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-start"
              priority
            />
          </div>

          <div className="col-md-8 p-4 d-flex flex-column justify-content-center">
            <h2 className="fw-bold text-dark mb-4">{moviedata.title}</h2>

            <div className="mb-3">
              <h5 className="text-secondary">Overview</h5>
              <p>{moviedata.overview}</p>
            </div>

            <div className="mb-3 d-flex flex-wrap gap-4">
              <div>
                <h6 className="text-muted mb-1">Release Date</h6>
                <p>{moviedata.release_date}</p>
              </div>
              <div>
                <h6 className="text-muted mb-1">Popularity</h6>
                <p>{moviedata.popularity}</p>
              </div>
              <div>
                <h6 className="text-muted mb-1">Vote Count</h6>
                <p>{moviedata.vote_count}  ⭐</p>
              </div>
            </div>

            <button
              className="btn btn-outline-dark align-self-start mt-3"
              onClick={() => window.history.back()}
            >
              ← Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
