import React, { useEffect } from "react";
import { Container, MainWrapper, Title } from "./Cart.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../../redux/pharmacy/selectors";
import { getCartItems } from "../../redux/pharmacy/operations";
import CartForm from "./CartForm/CartForm";
import PreviewCartItems from "./PreviewCartItems/PreviewCartItems";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);
  console.log(cart);
  return (
    <>
      <section>
        <Container>
          <Title>Cart</Title>
          <MainWrapper>
            <CartForm />
            <PreviewCartItems />
          </MainWrapper>
        </Container>
      </section>
    </>
  );
};

export default Cart;
