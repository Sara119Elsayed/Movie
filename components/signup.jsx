"use client";
import React, { memo } from "react";
import { useRouter } from "next/navigation";
import "bootstrap/dist/css/bootstrap.css";

function Signup() {
  const router = useRouter();

  const handleSignup = (e) => {
    e.preventDefault();
    // Add signup logic here (e.g., form validation, API call)
    router.push("/login");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4 rounded-4" style={{ maxWidth: "400px", width: "100%" }}>
        <div className="card-body">
          <h2 className="text-center mb-4 text-dark fw-bold">Sign Up</h2>
          <form onSubmit={handleSignup}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                className="form-control rounded-3"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="form-control rounded-3"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="form-control rounded-3"
                required
              />
            </div>
            <button type="submit" className="btn btn-dark w-100 rounded-3">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default memo(Signup);
