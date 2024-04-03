import React from "react";
import Logo from "components/Header/Logo/Logo";
import usualMob from "../../images/pill-mob@1x.png";
import retinaMob from "../../images/pill-mob@2x.png";
import usualTab from "../../images/pill-tab@1x.png";
import retinaTab from "../../images/pill-tab@2x.png";
import { useMediaQuery } from "react-responsive";
import {
  BtnBox,
  Container,
  ImgWrapper,
  LogoWrapper,
  SubmitBtn,
  Title,
  TitleBox,
} from "components/Register/Register.styled";
import { NavLink } from "react-router-dom";
import { InputBox, MainWrapper } from "./Login.styled";

const Login = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTabletOrDesktop = useMediaQuery({
    query: "(min-width: 768px)",
  });
  return (
    <>
      <Container>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <MainWrapper>
          <TitleBox>
            <Title>
              Your medication, delivered Say goodbye to all{" "}
              <span>your healthcare</span> worries with us
            </Title>
            <ImgWrapper>
              {isMobile && (
                <img
                  srcSet={`${usualMob} 1x, ${retinaMob} 2x`}
                  alt="illustration"
                />
              )}
              {isTabletOrDesktop && (
                <img
                  srcSet={`${usualTab} 1x, ${retinaTab} 2x`}
                  alt="illustration"
                />
              )}
            </ImgWrapper>
          </TitleBox>
          <form>
            <InputBox>
              <input type="text" placeholder="Email address" />
              <input type="password" placeholder="Password" />
            </InputBox>
            <BtnBox>
              <SubmitBtn type="submit">Login</SubmitBtn>
              <NavLink to="/register">Don't have an account?</NavLink>
            </BtnBox>
          </form>
        </MainWrapper>
      </Container>
    </>
  );
};

export default Login;
