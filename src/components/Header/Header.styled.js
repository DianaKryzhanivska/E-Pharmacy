import styled from "styled-components";
import { CommonContainer } from "styles/GlobalStyles";

export const Container = styled(CommonContainer)`
  padding-top: 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.green};

  @media only screen and (min-width: 768px) {
    padding-top: 28px;
  }

  @media only screen and (min-width: 1440px) {
    padding-left: 128px;
    padding-right: 128px;
  }
`;

export const BurgerBtn = styled.button`
  background: transparent;
  border: none;

  & svg {
    width: 32px;
    height: 26px;
    stroke: #fff;
  }
`;
