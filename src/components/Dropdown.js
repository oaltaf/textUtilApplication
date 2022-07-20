import React from "react";
import { useEffect, useState } from "react";
import Checkboxes from "./Checkboxes";
import FileUpload from "./FileUpload";
import Table from "./Table";

export default function Dropdown() {
  const [car, setCar] = useState("selectDreamCar");

  const [tableContentVisible, setTableContentVisible] = useState(false);
  const [benzContentVisible, setBenzContentVisible] = useState(false);
  const [audiContentVisible, setAudiContentVisible] = useState(false);

  useEffect(() => {
    car === "table"
      ? setTableContentVisible(true)
      : setTableContentVisible(false);
    car === "fileupload"
      ? setBenzContentVisible(true)
      : setBenzContentVisible(false);
    car === "checkboxes"
      ? setAudiContentVisible(true)
      : setAudiContentVisible(false);
  }, [car]);

  const handleOnChange = (e) => {
    setCar(e.target.value);
  };

  const makeFirstLetterCapital = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const renderResult = () => {
    let result;
    car === "selectDreamCar"
      ? (result = "select your action item")
      : (result = makeFirstLetterCapital(car));
    return result;
  };

  return (
    <div className="container mt-6">
      <div>
        <h1>{renderResult()}</h1>
      </div>
      <div className="mt-6">
        <select className="form-select" value={car} onChange={handleOnChange}>
          <option value="selectDreamCar">Select your action item</option>
          <option value="table">User Table</option>
          <option value="fileupload">Upload a File</option>
          <option value="checkboxes">Test Checkboxes</option>
        </select>
      </div>
      {tableContentVisible && <Table />}
      {benzContentVisible && <FileUpload />}
      {audiContentVisible && <Checkboxes />}
    </div>
  );
}
