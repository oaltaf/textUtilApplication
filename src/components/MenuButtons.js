import React from "react";

import { Link } from "react-router-dom";

// const callAddRestFunc = () => {
//   console.log("Add Rest was clicked");
//   <LoginForm></LoginForm>;
// };

export default function MenuButtons() {
  return (
    <>
      <div className="content">
        <Link to="/restaurant">
          <button
            id="right-panel-link1"
            type="button"
            className="btn btn-outline-secondary mx-2 mt-2"
          >
            Add Restaurant
          </button>
        </Link>

        <Link to="/dropdown">
          <button
            id="right-panel-link1"
            type="button"
            className="btn btn-outline-secondary mx-2 mt-2"
          >
            Dropdown
          </button>
        </Link>

        <Link to="/login">
          <button
            id="right-panel-link2"
            type="button"
            className="btn btn-outline-secondary mx-2 mt-2"
          >
            Login
          </button>
        </Link>

        <Link to="/register">
          <button
            id="right-panel-link3"
            type="button"
            className="btn btn-outline-secondary mx-2 mt-2"
          >
            Register
          </button>
        </Link>
      </div>
    </>
  );
}
