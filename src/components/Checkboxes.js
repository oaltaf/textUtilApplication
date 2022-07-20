import React from "react";

export default function Checkboxes() {
  return (
    <>
      <div class="input-group mb-3">
        <div class="input-group-text">
          <input
            class="form-check-input mt-0"
            type="checkbox"
            value=""
            aria-label="Checkbox for following text input"
          />
        </div>
        <input
          type="text"
          class="form-control"
          aria-label="Text input with checkbox"
        />
        Test
      </div>

      <div class="input-group mb-3">
        <div class="input-group-text">
          <input
            class="form-check-input mt-0"
            type="checkbox"
            value=""
            aria-label="Checkbox for following text input"
          />
        </div>
        <input
          type="text"
          class="form-control"
          aria-label="Text input with checkbox"
        />
        Test2
      </div>

      <div class="input-group mb-3">
        <div class="input-group-text">
          <input
            class="form-check-input mt-0"
            type="checkbox"
            value=""
            aria-label="Checkbox for following text input"
          />
        </div>
        <input
          type="text"
          class="form-control"
          aria-label="Text input with checkbox"
        />
        Test3
      </div>
    </>
  );
}
