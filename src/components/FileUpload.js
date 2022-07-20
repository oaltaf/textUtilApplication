import React from "react";

export default function FileUpload() {
  return (
    <div class="mb-3">
      <label for="formFile" class="form-label">
        Default file input example
      </label>
      <input class="form-control" type="file" id="formFile"></input>
    </div>
  );
}
