//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import { createRoot } from "react-dom/client";
const time = new Date();

const current_time = time.getHours();
let custom = {
  color: "red",
};
console.log(current_time);
let greet = "Good morning";
if (current_time < 12) {
  greet = "Good morning";
  custom.color = "red";
} else if (current_time < 18) {
  greet = "Good Afternoon";
  custom.color = "green";
} else {
  greet = "Good night";
  custom.color = "blue";
}
const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1 className="heading" style={custom}>
      {greet}
    </h1>
  </div>
);
