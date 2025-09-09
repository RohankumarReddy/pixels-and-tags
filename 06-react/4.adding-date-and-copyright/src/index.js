//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

const name = "Nagaruru Rohankumar reddy";
const date = new Date();
const full = date.getFullYear();

import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <p>Created by {name}</p>
    <p>Copyright {full}</p>
  </div>
);
