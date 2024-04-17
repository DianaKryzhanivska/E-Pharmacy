import React, { useEffect } from "react";
import sprite from "../../../images/sprite.svg";
import { CartBtn, CartItems, UserIcon, Wrapper } from "./UserIcons.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../../redux/auth/selectors";
import { useNavigate } from "react-router-dom";
import { selectCart } from "../../../redux/pharmacy/selectors";
import { getCartItems } from "../../../redux/pharmacy/operations";

const UserIcons = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const cart = useSelector(selectCart);

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

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
          <CartItems>{cart?.cartProducts?.length}</CartItems>
        </CartBtn>
        <UserIcon>{user?.name[0]}</UserIcon>
      </Wrapper>
    </>
  );
};

export default UserIcons;
