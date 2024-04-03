import React from "react";
import {
  BtnBox,
  Container,
  ImgWrapper,
  InputBox,
  LogoWrapper,
  SubmitBtn,
  Title,
  TitleBox,
} from "./Register.styled";
import Logo from "components/Header/Logo/Logo";
import { NavLink } from "react-router-dom";
import usualMob from "../../images/pill-mob@1x.png";
import retinaMob from "../../images/pill-mob@2x.png";

const Register = () => {
  return (
    <>
      <Container>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <TitleBox>
          <Title>
            Your medication, delivered Say goodbye to all{" "}
            <span>your healthcare</span> worries with us
          </Title>
          <ImgWrapper>
            <img
              srcSet={`${usualMob} 1x, ${retinaMob} 2x`}
              alt="illustration"
            />
          </ImgWrapper>
        </TitleBox>
        <form>
          <InputBox>
            <input type="text" placeholder="User Name" />
            <input type="text" placeholder="Email address" />
            <input type="text" placeholder="Phone number" />
            <input type="password" placeholder="Password" />
          </InputBox>
          <BtnBox>
            <SubmitBtn type="submit">Register</SubmitBtn>
            <NavLink to="/login">Already have an account?</NavLink>
          </BtnBox>
        </form>
      </Container>
    </>
  );
};

export default Register;
