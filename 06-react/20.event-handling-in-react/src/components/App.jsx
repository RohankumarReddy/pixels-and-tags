import React, { useState } from "react";

function App() {
  const [heading, changeheading] = useState("Hello");
  const [mouseover, mouseset] = useState(false);
  function change() {
    changeheading("Submitted");
  }
  function changecol() {
    mouseset(true);
  }
  function mousey() {
    mouseset(true);
  }
  function mouseyy() {
    mouseset(false);
  }
  return (
    <div className="container">
      <h1>{heading}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: mouseover ? "blue" : "white" }}
        onClick={change}
        onMouseOver={mousey}
        onMouseOut={mouseyy}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
