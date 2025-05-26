"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function AddMovie() {
  const router = useRouter();

  const [newMovie, setNewMovie] = useState({
    title: "",
    vote_average: "",
    poster_path: ""
  });

  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/api/movie", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newMovie)
    })
      .then((res) => res.json())
      .then(() => {
        router.push("/movie");
      })
      .catch((error) => console.error("Error adding movie:", error));
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-lg border-0 rounded-4 p-4">
            <h2 className="text-center mb-4 fw-bold text-dark">Add New Movie</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="title" className="form-label fw-semibold">Movie Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={newMovie.title}
                  onChange={handleChange}
                  className="form-control rounded-3"
                  placeholder="Enter movie title"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="poster_path" className="form-label fw-semibold">Poster URL</label>
                <input
                  type="url"
                  id="poster_path"
                  name="poster_path"
                  value={newMovie.poster_path}
                  onChange={handleChange}
                  className="form-control rounded-3"
                  placeholder="Enter image URL"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="vote_average" className="form-label fw-semibold">Rating</label>
                <input
                  type="number"
                  step="0.1"
                  min="0"
                  max="10"
                  id="vote_average"
                  name="vote_average"
                  value={newMovie.vote_average}
                  onChange={handleChange}
                  className="form-control rounded-3"
                  placeholder="Enter rating (0–10)"
                  required
                />
              </div>
              <button type="submit" className="btn btn-dark w-100 fw-bold rounded-3">
                Add Movie
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
