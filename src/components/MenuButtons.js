import React from "react";
import LoginForm from "./LoginForm";

const callAddRestFunc = () => {
  console.log("Add Rest was clicked");
  <LoginForm></LoginForm>;
};

export default function MenuButtons() {
  return (
    <>
      <div className="content">
        <button
          id="right-panel-link1"
          type="button"
          className="btn btn-outline-secondary mx-2 mt-2"
          onClick={callAddRestFunc}
        >
          Add Restaurant
        </button>

        <button
          id="right-panel-link2"
          type="button"
          className="btn btn-outline-secondary mx-2 mt-2"
        >
          Login
        </button>

        <button
          id="right-panel-link3"
          type="button"
          className="btn btn-outline-secondary mx-2 mt-2"
        >
          Register
        </button>
      </div>
    </>
  );
}
