import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });

  function handleName(event) {
    const { value, name } = event.target;

    setFullName((prevName) => {
      if (name === "fName") {
        return { fName: value, lName: prevName.lName };
      } else if (name === "lName") {
        return { fName: prevName.fName, lName: value };
      }
    });
  }

  function handleClick(event) {
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleName}
          name="fName"
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          onChange={handleName}
          name="lName"
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
