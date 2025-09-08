import React from "react"; // React builds components
import { createRoot } from "react-dom/client"; // ReactDOM renders them
const name = "Reddy";
const greet = "welcome!";
const num = 1;
const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1>Hello, {name + " " + greet}</h1>
    <p>
      Your lucky number is: <span>{num}</span>
    </p>
  </div>
);
