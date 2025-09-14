import React from "react";
import Login from "./login";
var Lolgin = false;
// function num() {
//   if (Lolgin) {
//     return <h1>Hello</h1>;
//   } else {
//     return <Login />;
//   }
// }
function App() {
  return (
    <div className="container">
      {Lolgin === true ? <h1>Hello</h1> : <Login />}
    </div>
  );
}

export default App;
