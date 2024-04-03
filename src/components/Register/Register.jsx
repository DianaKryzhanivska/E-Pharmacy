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
import usualTab from "../../images/pill-tab@1x.png";
import retinaTab from "../../images/pill-tab@2x.png";
import { useMediaQuery } from "react-responsive";

const Register = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1439px)",
  });
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
            {isMobile && (
              <img
                srcSet={`${usualMob} 1x, ${retinaMob} 2x`}
                alt="illustration"
              />
            )}
            {isTablet && (
              <img
                srcSet={`${usualTab} 1x, ${retinaTab} 2x`}
                alt="illustration"
              />
            )}
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
