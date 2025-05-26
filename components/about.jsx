"use client";
import React, { memo } from "react";
import "bootstrap/dist/css/bootstrap.css";

function About() {
  return (
    <div className="container mt-5">
      <div className="card shadow-lg border-0 rounded-3">
        <div className="card-body p-5">
          <h1 className="text-center text-dark fw-bold mb-4">About</h1>
          <p className="lead text-muted text-center">
            Welcome to our Movie Here, you can explore a wide range of popular movies, view detailed information. Our mission is to provide a seamless movie discovery experience for all movie enthusiasts.
          </p>
        </div>
      </div>
    </div>
  );
}

export default memo(About);
