// import logo from "./logo.svg";

import "./App.css";
import Navbar from "./components/Navbar";
import propTypes from "prop-types";
import TextForm from "./components/TextForm";
// import MenuButtons from "./components/MenuButtons";
import React, { useState } from "react";
import RegisterForm from "./components/RegisterForm";
// import About from "./components/About";

function App() {
  const [mode, setMode] = useState(false); // Whether dark mode is enable or not

  return (
    <>
      <Navbar mode={mode}></Navbar>
      {/* <MenuButtons></MenuButtons> */}

      <RegisterForm></RegisterForm>
      {/* <Navbar
        title="Restaurants"
        homeTitle="Home"
        aboutTitle="About"
        searchText="Search"
      ></Navbar> */}

      <div className="container my-6">
        {/* <TextForm textArea="Enter the text here"></TextForm> */}
        {/* <About></About> */}
      </div>
    </>
  );
}

Navbar.propTypes = {
  title: propTypes.string,
  aboutTitle: propTypes.string,
  homeTitle: propTypes.string,
  searchText: propTypes.string,
};

Navbar.defaultProps = {
  title: "Restaurants",
  aboutTitle: "About Us",
  homeTitle: "Home",
  searchText: "Search",
};

TextForm.defaultProps = { heading: "Enter the text to Analyze" };

export default App;
