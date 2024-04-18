import React from "react";
import { NavLink } from "react-router-dom";
import { Btn } from "./LoginBtn.styled";

const LoginBtn = ({ pageType }) => {
  return (
    <>
      <Btn type="button" pageType={pageType}>
        <NavLink to="/login">Login</NavLink>
      </Btn>
    </>
  );
};

export default LoginBtn;
