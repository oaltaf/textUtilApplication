import React, { useState } from "react";

export default function TextForm(props) {
  const handleUPClick = () => {
    console.log("UpperCase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLCClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("UpperCase was clicked - onChange");
    setText(event.target.value);
  };

  const handleClearText = (event) => {
    console.log("clear text is clicked");
    setText((event.target.value = ""));
  };

  const handleReverseString = (event) => {
    console.log("clear text is clicked");
    let textRev = text.toString();
    textRev.split(" ");

    setText(textRev);
  };

  const handleCopyText = (event) => {
    console.log("clear text is clicked");
  };

  const [text, setText] = useState("Enter text here");
  //   setText("Testing");
  return (
    <>
      <h1>{props.heading}</h1>
      <div>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">
            {props.textArea}
          </label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="10"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUPClick}>
          Convert to UpperCase
        </button>

        <button className="btn btn-primary mx-1" onClick={handleLCClick}>
          Convert to LowerCase
        </button>

        <button className="btn btn-primary mx-1" onClick={handleClearText}>
          Clear Text
        </button>

        <button className="btn btn-primary mx-1" onClick={handleReverseString}>
          Reverse String
        </button>

        <button
          id="copyBtn"
          className="btn btn-primary mx-1"
          onClick={handleCopyText}
        >
          Copy Text
        </button>
      </div>

      <div className="container" style={{ backgroundColor: "#00000" }}>
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words, {text.length} characters
        </p>
        <h1>Preview</h1>
        <p>{text}</p>
      </div>
    </>
  );
}
