//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

root.render(
  <div>
    <h1>My Favourite Foods</h1>
    <ul>
      <li>Biriyani</li>
      <li>Biriyani</li>
      <li>Biriyani</li>
    </ul>
  </div>
);
