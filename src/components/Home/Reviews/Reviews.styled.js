import styled from "styled-components";
import { CommonContainer } from "styles/GlobalStyles";

export const Container = styled(CommonContainer)`
  padding-bottom: 80px;
  background: ${({ theme }) => theme.colors.lightGray};
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.14em;
  margin-bottom: 14px;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28em;
  margin-bottom: 64px;
`;

export const Item = styled.li`
  position: relative;
  background: ${({ theme }) => theme.colors.backWhite};
  padding: 78px 16px 32px;

  & h3 {
    color: ${({ theme }) => theme.colors.black};
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.5em;
    margin-bottom: 16px;
  }

  & p {
    color: ${({ theme }) => theme.colors.gray};
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25em;
  }
`;

export const ImgBox = styled.div`
  position: absolute;
  top: -24px;
  left: 50%;
  transform: translateX(-50%);
  width: 64px;
  height: 64px;
  border-radius: 64px;
  box-shadow: 0px 1px 4px 0px rgba(16, 24, 40, 0.06);
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid black;
`;
