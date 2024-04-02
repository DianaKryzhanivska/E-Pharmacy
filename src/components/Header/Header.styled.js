import styled from "styled-components";
import { CommonContainer } from "styles/GlobalStyles";

export const Container = styled(CommonContainer)`
  padding-top: 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BurgerBtn = styled.button`
  background: transparent;
  border: none;

  & svg {
    width: 32px;
    height: 26px;
    stroke: #121417;
  }
`;
