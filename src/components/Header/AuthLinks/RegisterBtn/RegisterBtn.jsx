import React from "react";
import { NavLink } from "react-router-dom";
import { Btn } from "./RegisterBtn.styled";

const RegisterBtn = () => {
  return (
    <>
      <Btn type="button">
        <NavLink to="/register">Register</NavLink>
      </Btn>
    </>
  );
};

export default RegisterBtn;
