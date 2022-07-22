import React from "react";

export default function Help() {
  return (
    <>
      <div style={{ backgroundColor: "white" }}>
        <h1>List of Automation Hints</h1>
        <p>
          <ol>
            <li>Remove all items from blur property</li>
            <li>
              If above point doesn't work for you then go to "Source" tab in
              browser, inspect the element and then press <kbd>FN</kbd> +{" "}
              <kbd>F8</kbd> key to take the browser in debug mode. Then inspect
              the element again to check element xpath (In case you are using
              Windows Machine)
              <p>
                If you are MacOS user, then you may have to press <kbd>FN</kbd>{" "}
                + <kbd>command</kbd> + <kbd>F8</kbd> to bring browser in debug
                mode
              </p>
            </li>
          </ol>
          <ul></ul>
        </p>
      </div>
    </>
  );
}
