import React from "react";
import { NavLink } from "react-router-dom";
import { Btn } from "./RegisterBtn.styled";

const RegisterBtn = ({ pageType }) => {
  return (
    <>
      <Btn type="button" pageType={pageType}>
        <NavLink to="/register">Register</NavLink>
      </Btn>
    </>
  );
};

export default RegisterBtn;
