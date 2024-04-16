import React, { useEffect } from "react";
import {
  Container,
  Form,
  InputBox,
  MainWrapper,
  OrderBox,
  PaymentBox,
  RadioBox,
  SubTitle,
  SubmitBtn,
  Text,
  Title,
  TotalBox,
} from "./Cart.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../../redux/pharmacy/selectors";
import { getCartItems } from "../../redux/pharmacy/operations";

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
            <Form>
              <SubTitle>Enter shipping info </SubTitle>
              <Text>
                Enter your delivery address where you get the product. You can
                also send any other location where you send the products.
              </Text>
              <InputBox>
                <label htmlFor="name">
                  Name
                  <input type="text" id="name" placeholder="Enter text" />
                </label>
                <label htmlFor="email">
                  Email
                  <input type="text" id="email" placeholder="Enter text" />
                </label>
                <label htmlFor="phone">
                  Phone
                  <input type="text" id="phone" placeholder="Enter text" />
                </label>
                <label htmlFor="address">
                  Address
                  <input type="text" id="address" placeholder="Enter text" />
                </label>
              </InputBox>
              <PaymentBox>
                <SubTitle>Payment method</SubTitle>
                <Text>
                  You can pay us in a multiple way in our payment gateway
                  system.
                </Text>
                <RadioBox>
                  <label htmlFor="payment">
                    <input type="radio" />
                    Cash On Delivery
                  </label>
                  <label htmlFor="payment">
                    <input type="radio" />
                    Bank
                  </label>
                </RadioBox>
              </PaymentBox>
              <OrderBox>
                <SubTitle>Order details </SubTitle>
                <Text>
                  Shipping and additionnal costs are calculated based on values
                  you have entered.
                </Text>
                <TotalBox>
                  <p>Total:</p>
                  <p>৳ 122.00</p>
                </TotalBox>
              </OrderBox>
              <SubmitBtn type="submit">Place order</SubmitBtn>
            </Form>
            <div></div>
          </MainWrapper>
        </Container>
      </section>
    </>
  );
};

export default Cart;
