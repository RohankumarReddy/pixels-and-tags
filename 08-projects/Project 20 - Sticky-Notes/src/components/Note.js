import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.a}</h1>
      <p>{props.b}</p>
    </div>
  );
}

export default Note;
