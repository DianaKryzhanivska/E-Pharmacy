import React from "react";
import RegisterBtn from "./RegisterBtn/RegisterBtn";
import LoginBtn from "./LoginBtn/LoginBtn";
import { Wrapper } from "./AuthLinks.styled";

const AuthLinks = () => {
  return (
    <>
      <Wrapper>
        <RegisterBtn />
        <LoginBtn />
      </Wrapper>
    </>
  );
};

export default AuthLinks;
