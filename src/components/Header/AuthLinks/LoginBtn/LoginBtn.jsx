import React from "react";
import { NavLink } from "react-router-dom";
import { Btn } from "./LoginBtn.styled";

const LoginBtn = () => {
  return (
    <>
      <Btn type="button">
        <NavLink to="/login">Login</NavLink>
      </Btn>
    </>
  );
};

export default LoginBtn;
