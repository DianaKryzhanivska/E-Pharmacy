import styled from "styled-components";
import { CommonContainer } from "styles/GlobalStyles";

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow-y: auto;
  display: flex;
  justify-content: flex-end;
  z-index: 10;
`;

export const Content = styled.div`
  position: relative;
  width: 210px;
  height: auto;
  background: ${({ theme }) => theme.colors.green};
  height: auto;
  overflow-y: auto;
  z-index: 100;
`;

export const CloseBtn = styled.button`
  position: absolute;
  background: transparent;
  top: 31px;
  right: 20px;

  & svg {
    width: 32px;
    height: 32px;
  }
`;

export const Container = styled(CommonContainer)`
  padding-top: 260px;
  padding-bottom: 40px;
`;
