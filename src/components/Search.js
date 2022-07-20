import React from "react";

export default function Search() {
  return (
    <>
      <label for="exampleDataList" class="form-label">
        Datalist example
      </label>
      <input
        class="form-control"
        list="datalistOptions"
        id="exampleDataList"
        placeholder="Type to search..."
      />
      <datalist id="datalistOptions">
        <option value="Lahore" />
        <option value="Karachi" />
        <option value="Islamabad" />
        <option value="Multan" />
        <option value="Bahawalpur" />
      </datalist>
    </>
  );
}
