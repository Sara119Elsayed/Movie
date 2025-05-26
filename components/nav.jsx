"use client";
import Link from 'next/link';
import React, { memo, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.css";

function Nav() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle");
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 shadow">
      <div className="container">
        <Link className="navbar-brand fw-bold" href="#">MoviesApp</Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" href="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/movie">Movies</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/signup">Signup</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default memo(Nav);
