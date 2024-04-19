import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow-y: auto;
  background: rgba(18, 20, 23, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

export const Content = styled.div`
  position: relative;
  height: auto;
  max-height: 494px;
  width: 343px;
  overflow-y: auto;
  padding: 40px 32px;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.white};
  z-index: 100;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: transparent;

  & svg {
    width: 20px;
    height: 20px;
    stroke: ${({ theme }) => theme.colors.black};
  }
`;
