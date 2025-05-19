"use client";
import React, { memo } from "react";
import "bootstrap/dist/css/bootstrap.css";

function Signup() {
  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4 rounded-4">
        <div className="card-body">
          <h3 className="card-title text-center mb-4 text-dark fw-bold">Sign Up</h3>
          <form className="form-group">
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                className="form-control rounded-3"
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
              />
            </div>
            <button type="submit" className="btn btn-dark w-100 rounded-3">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default memo(Signup);
