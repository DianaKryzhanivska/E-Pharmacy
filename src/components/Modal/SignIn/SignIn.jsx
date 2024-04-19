import React from "react";
import {
  BtnBox,
  InputBox,
  RegisterBtn,
  SubmitBtn,
  Text,
  Title,
} from "./SignIn.styled";
import { useFormik } from "formik";
import { loginSchema } from "schemas/yupSchemas";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../../redux/auth/operations";

const SignIn = ({ onClose }) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log(values);
      dispatch(loginThunk(values));
      onClose();
    },
  });
  return (
    <>
      <Title>Log in to your account</Title>
      <Text>Please login to your account before continuing.</Text>
      <form onSubmit={formik.handleSubmit}>
        <InputBox>
          <label htmlFor="email">
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email address"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email && formik.touched.email ? (
              <span>{formik.errors.email}</span>
            ) : null}
          </label>
          <label htmlFor="password">
            <input
              type="text"
              id="password"
              name="password"
              placeholder="Password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.errors.password && formik.touched.password ? (
              <span>{formik.errors.password}</span>
            ) : null}
          </label>
        </InputBox>
        <BtnBox>
          <SubmitBtn type="submit">Log in</SubmitBtn>
          <RegisterBtn type="button">Don't have an account?</RegisterBtn>
        </BtnBox>
      </form>
    </>
  );
};

export default SignIn;
