import React from "react";
import Input from "./input";

function Login(props) {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="password" />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
