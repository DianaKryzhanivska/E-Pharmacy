import React from "react";
import sprite from "../../../images/sprite.svg";
import { NavLink } from "react-router-dom";
import { LogoBox } from "./Logo.styled";

const Logo = () => {
  return (
    <>
      <LogoBox>
        <svg>
          <use href={`${sprite}#logo`} />
        </svg>
        <NavLink to="/">E-Pharmacy</NavLink>
      </LogoBox>
    </>
  );
};

export default Logo;
