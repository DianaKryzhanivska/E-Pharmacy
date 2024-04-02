import React from "react";
import sprite from "../../../images/sprite.svg";
import { NavLinkStyled } from "./Logo.styled";

const Logo = () => {
  return (
    <>
      <NavLinkStyled to="/">
        <svg>
          <use href={`${sprite}#logo`} />
        </svg>
        <p>E-Pharmacy</p>
      </NavLinkStyled>
    </>
  );
};

export default Logo;
