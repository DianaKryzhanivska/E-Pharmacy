import styled from "styled-components";
import { CommonContainer } from "styles/GlobalStyles";
import imgMob from "../../../images/hero-mob@1x.png";
import imgTab from "../../../images/hero-tab@1x.png";
import imgDesk from "../../../images/hero-desk@1x.png";

export const Container = styled(CommonContainer)`
  padding-top: 197px;
  padding-bottom: 246px;
  background: ${({ theme }) => theme.colors.green};
  display: flex;
  justify-content: center;

  @media only screen and (min-width: 768px) {
    padding-top: 186px;
    padding-bottom: 258px;
  }

  @media only screen and (min-width: 1440px) {
    padding-top: 73px;
    padding-bottom: 146px;
  }
`;

export const HeroBox = styled.div`
  width: 331px;
  height: 312px;
  padding: 19px 0 91px;
  background-image: url(${imgMob});
  background-size: cover;
  background-position: center;

  @media only screen and (min-width: 768px) {
    width: 704px;
    height: 508px;
    padding: 140px 64px 156px 31px;
    background-image: url(${imgTab});
  }

  @media only screen and (min-width: 1440px) {
    width: 749px;
    padding: 140px 86px 156px 54px;
    background-image: url(${imgDesk});
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: 50px;
  font-weight: 600;
  line-height: 1em;
  margin-bottom: 20px;
  text-shadow: 0px 4px 85px rgba(29, 30, 33, 0.3);

  @media only screen and (min-width: 768px) {
    font-size: 74px;
    margin-bottom: 24px;
  }

  @media only screen and (min-width: 1440px) {
    width: 609px;
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.33em;
  margin-left: auto;
  width: 156px;

  @media only screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25em;
    margin-right: 19px;
    width: 207px;
  }
`;
