import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg bg-${props.mode} text-${props.mode}`}
    >
      <div className="container-fluid">
        <Link
          className={`navbar-brand text-${
            props.mode === "light" ? "dark" : "light"
          }`}
          to="/"
        >
          {props.title}
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link active text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
                aria-current="page"
                to="/"
              >
                {props.homeTitle}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link active text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
                aria-current="page"
                to="/about"
              >
                {props.aboutTitle}
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              {props.searchText}
            </button>
          </form>
        </div>
      </div>
      <div
        className={`form-check form-switch text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onClick={props.toggleMode}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          Enable Dark Mode
        </label>
      </div>
    </nav>
  );
}
