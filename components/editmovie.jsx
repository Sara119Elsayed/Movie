"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

export default function Editmovie() {
  const router = useRouter();
  const params = useParams();
  const [movieData, setMovieData] = useState({
    title: "",
    poster_path: "",
    vote_average: ""
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/movie/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setMovieData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching movie:", error);
        setLoading(false);
      });
  }, [params.id]);

  const handleChange = (e) => {
    setMovieData({ ...movieData, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    fetch(`/api/movie/${params.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(movieData)
    })
      .then((res) => res.json())
      .then(() => {
        alert("Movie updated successfully");
        router.push("/movie");
      })
      .catch((error) => console.error("Error updating movie:", error));
  };

  if (loading)
    return (
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="spinner-border text-dark" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card p-4 shadow-lg border-0 rounded-4">
            <h2 className="text-center fw-bold mb-4 text-dark">Edit Movie</h2>
            <form onSubmit={handleUpdate}>
              <div className="mb-3">
                <label htmlFor="title" className="form-label fw-semibold">
                  Movie Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={movieData.title}
                  onChange={handleChange}
                  className="form-control rounded-3"
                  required
                  placeholder="Enter movie title"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="poster_path" className="form-label fw-semibold">
                  Image URL
                </label>
                <input
                  type="url"
                  id="poster_path"
                  name="poster_path"
                  value={movieData.poster_path}
                  onChange={handleChange}
                  className="form-control rounded-3"
                  placeholder="Enter poster image URL"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="vote_average" className="form-label fw-semibold">
                  Rating
                </label>
                <input
                  type="number"
                  id="vote_average"
                  name="vote_average"
                  value={movieData.vote_average}
                  onChange={handleChange}
                  className="form-control rounded-3"
                  placeholder="Enter movie rating (0-10)"
                />
              </div>
              <button type="submit" className="btn btn-dark w-100 fw-bold rounded-3">
                Update Movie
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
