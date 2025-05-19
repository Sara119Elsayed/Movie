"use client";
import React, { memo } from "react";
import "bootstrap/dist/css/bootstrap.css";

function Login() {
  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4 rounded-4">
        <div className="card-body">
          <h1 className="card-title text-center mb-4 text-dark fw-bold">Login</h1>
          <form className="form-group">
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email"
                className="form-control rounded-3"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter Password"
                className="form-control rounded-3"
              />
            </div>
            <button type="submit" className="btn btn-dark w-100 rounded-3">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default memo(Login);
