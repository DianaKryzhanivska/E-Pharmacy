import React from "react";
import {
  BtnBox,
  InputBox,
  RegisterBtn,
  SubmitBtn,
  Text,
  Title,
} from "./SignIn.styled";

const SignIn = () => {
  return (
    <>
      <Title>Log in to your account</Title>
      <Text>Please login to your account before continuing.</Text>
      <form>
        <InputBox>
          <label htmlFor="email">
            <input type="text" id="email" placeholder="Email address" />
          </label>
          <label htmlFor="password">
            <input type="text" id="password" placeholder="Password" />
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
