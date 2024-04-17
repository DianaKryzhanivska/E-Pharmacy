import React from "react";
import {
  Form,
  InputBox,
  OrderBox,
  PaymentBox,
  RadioBox,
  SubTitle,
  SubmitBtn,
  Text,
  TotalBox,
} from "./CartForm.styled";
import { useSelector } from "react-redux";
import { selectCart } from "../../../redux/pharmacy/selectors";

const CartForm = () => {
  const cart = useSelector(selectCart);
  const total = Number(cart?.total).toFixed(2) || 0;
  return (
    <>
      <Form>
        <SubTitle>Enter shipping info </SubTitle>
        <Text>
          Enter your delivery address where you get the product. You can also
          send any other location where you send the products.
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
            You can pay us in a multiple way in our payment gateway system.
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
            Shipping and additionnal costs are calculated based on values you
            have entered.
          </Text>
          <TotalBox>
            <p>Total:</p>
            <p>{`৳ ${total}`}</p>
          </TotalBox>
        </OrderBox>
        <SubmitBtn type="submit">Place order</SubmitBtn>
      </Form>
    </>
  );
};

export default CartForm;
