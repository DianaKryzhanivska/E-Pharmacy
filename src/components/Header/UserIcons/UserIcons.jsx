import React from "react";
import sprite from "../../../images/sprite.svg";
import { CartBtn, CartItems, UserIcon, Wrapper } from "./UserIcons.styled";
import { useSelector } from "react-redux";
import { selectUser } from "../../../redux/auth/selectors";
import { useNavigate } from "react-router-dom";

const UserIcons = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  const handleCartClick = () => {
    navigate("/cart");
  };

  return (
    <>
      <Wrapper>
        <CartBtn onClick={handleCartClick}>
          <svg>
            <use href={`${sprite}#shop`} />
          </svg>
          <CartItems>0</CartItems>
        </CartBtn>
        <UserIcon>{user?.name[0]}</UserIcon>
      </Wrapper>
    </>
  );
};

export default UserIcons;
