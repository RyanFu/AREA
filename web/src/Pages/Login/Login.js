import React from "react";
import Navbar from "Components/Header/Navbar";
import "./Login.css";

function Login(...props) {
  return (
    <div>
      <Navbar props={false} />
    </div>
  );
}

export default Login;