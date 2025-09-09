import React from "react";
import { createRoot } from "react-dom/client";

const custom = {
  color: "red",
  border: "1px solid black",
  width: "full",
  display: "inline",
};

const root = createRoot(document.getElementById("root"));
root.render(<h1 style={custom}>Hello world</h1>);
