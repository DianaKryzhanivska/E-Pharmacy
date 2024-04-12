import React from "react";
import sprite from "../../../images/sprite.svg";
import { CartBtn, CartItems, UserIcon, Wrapper } from "./UserIcons.styled";

const UserIcons = () => {
  return (
    <>
      <Wrapper>
        <CartBtn>
          <svg>
            <use href={`${sprite}#shop`} />
          </svg>
          <CartItems>0</CartItems>
        </CartBtn>
        <UserIcon>I</UserIcon>
      </Wrapper>
    </>
  );
};

export default UserIcons;
