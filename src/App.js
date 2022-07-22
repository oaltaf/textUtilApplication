// import logo from "./logo.svg";

import "./App.css";
import Navbar from "./components/Navbar";
import propTypes from "prop-types";
import TextForm from "./components/TextForm";
import MenuButtons from "./components/MenuButtons";

import LoginForm from "./components/LoginForm";
import React, { useState } from "react";
import RegisterForm from "./components/RegisterForm";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddRestaurant from "./components/AddRestaurant";
import Dropdown from "./components/Dropdown";
import Help from "./components/Help";

function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enable or not

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  // <div className="form-check form-switch">
  //   <input
  //     className="form-check-input"
  //     type="checkbox"
  //     role="switch"
  //     id="flexSwitchCheckDefault"
  //   />
  //   <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
  //     Enable Dark Mode
  //   </label>
  // </div>;

  return (
    <>
      {/* <Navbar mode={mode} toggleMode={toggleMode}></Navbar> */}

      {/* <MenuButtons></MenuButtons> */}
      {
        <BrowserRouter>
          <Navbar mode={mode} toggleMode={toggleMode}></Navbar>

          <MenuButtons></MenuButtons>

          {/* {<RegisterForm></RegisterForm>} */}
          {/* {
            <Navbar
              title="Restaurants"
              homeTitle="Home"
              aboutTitle="About"
              searchText="Search"
            ></Navbar>
          } */}

          <div
            className="container my-6"
            style={{ backgroundColor: "darkslategrey" }}
          >
            {/* { A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. } */}
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/help" element={<Help />} />
              {/* {
                <Route path="/users">
                  <Users />
                </Route>
              } */}
              <Route path="/" element={<TextForm />} />
              <Route path="/dropdown" element={<Dropdown></Dropdown>}></Route>;
              <Route path="/login" element={<LoginForm />}></Route>
              <Route path="/register" element={<RegisterForm />}></Route>
              <Route path="/restaurant" element={<AddRestaurant />}></Route>
              {/* { <TextForm/> textArea=`Enter the text here`/> } */}
              {/* {<About></About>} */}
            </Routes>
          </div>
        </BrowserRouter>
      }
    </>
  );
}

Navbar.propTypes = {
  title: propTypes.string,
  aboutTitle: propTypes.string,
  homeTitle: propTypes.string,
  searchText: propTypes.string,
  helpTitle: propTypes.string,
};

Navbar.defaultProps = {
  title: "Restaurants",
  aboutTitle: "About Us",
  homeTitle: "Home",
  searchText: "Search",
  helpTitle: "Help",
};

// TextForm.defaultProps = { heading: "Enter the text to Analyze" };

export default App;
