import React, { useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../../../redux/pharmacy/selectors";
import { useFormik } from "formik";
import { orderSchema } from "schemas/yupSchemas";
import { cartCheckout } from "../../../redux/pharmacy/operations";
import { useNavigate } from "react-router-dom";

const CartForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector(selectCart);
  const total = Number(cart?.total).toFixed(2) || 0;
  const [isCashPayment, setIsCashPayment] = useState(true);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      payment: isCashPayment ? "cash" : "bank",
    },
    validationSchema: orderSchema,
    onSubmit: (values) => {
      dispatch(cartCheckout(values))
        .unwrap()
        .then(() => {
          navigate("/home");
        });
    },
  });

  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <SubTitle>Enter shipping info </SubTitle>
        <Text>
          Enter your delivery address where you get the product. You can also
          send any other location where you send the products.
        </Text>
        <InputBox>
          <label htmlFor="name">
            Name
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter text"
              onChange={formik.handleChange}
              value={formik.values.name.trim()}
            />
            {formik.errors.name && formik.touched.name ? (
              <span>{formik.errors.name}</span>
            ) : null}
          </label>
          <label htmlFor="email">
            Email
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter text"
              onChange={formik.handleChange}
              value={formik.values.email.trim()}
            />
            {formik.errors.email && formik.touched.email ? (
              <span>{formik.errors.email}</span>
            ) : null}
          </label>
          <label htmlFor="phone">
            Phone
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Enter text"
              onChange={formik.handleChange}
              value={formik.values.phone}
            />
            {formik.errors.phone && formik.touched.phone ? (
              <span>{formik.errors.phone}</span>
            ) : null}
          </label>
          <label htmlFor="address">
            Address
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Enter text"
              onChange={formik.handleChange}
              value={formik.values.address}
            />
            {formik.errors.address && formik.touched.address ? (
              <span>{formik.errors.address}</span>
            ) : null}
          </label>
        </InputBox>
        <PaymentBox>
          <SubTitle>Payment method</SubTitle>
          <Text>
            You can pay us in a multiple way in our payment gateway system.
          </Text>
          <RadioBox>
            <label htmlFor="cash">
              <input
                type="radio"
                id="cash"
                name="payment"
                checked={isCashPayment}
                onChange={() => setIsCashPayment(true)}
              />
              Cash On Delivery
            </label>
            <label htmlFor="bank">
              <input
                type="radio"
                id="bank"
                name="payment"
                checked={!isCashPayment}
                onChange={() => setIsCashPayment(false)}
              />
              Bank
            </label>
            {formik.errors.payment && formik.touched.payment ? (
              <span>{formik.errors.payment}</span>
            ) : null}
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
