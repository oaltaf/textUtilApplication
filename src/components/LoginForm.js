import React from "react";

export default function LoginForm() {
  return (
    <>
      <div className="container">
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Username
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Password
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <button className="btn btn-primary">Login</button>
      </div>
    </>
  );
}
