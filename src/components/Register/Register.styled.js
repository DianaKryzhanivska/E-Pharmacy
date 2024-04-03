import styled from "styled-components";
import { CommonContainer } from "styles/GlobalStyles";

export const Container = styled(CommonContainer)`
  padding-top: 25px;
  padding-bottom: 191px;
  background: #f7f8fa;
`;

export const LogoWrapper = styled.div`
  margin-bottom: 106px;
`;

export const TitleBox = styled.div`
  position: relative;
  z-index: 10;
`;

export const ImgWrapper = styled.div`
  position: absolute;
  top: -56px;
  right: 20px;
  z-index: -10;
`;

export const Title = styled.h2`
  color: #1d1e21;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.21em;
  margin-bottom: 20px;

  & span {
    color: ${({ theme }) => theme.colors.green};
  }
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;

  & input {
    padding: 13px 18px;
    border-radius: 60px;
    border: 1px solid rgba(29, 30, 33, 0.1);
    background: ${({ theme }) => theme.colors.white};
    color: rgba(29, 30, 33, 0.4);
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5em;
  }
`;

export const BtnBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  & a {
    display: flex;
    justify-content: center;
  }
`;

export const SubmitBtn = styled.button`
  background: ${({ theme }) => theme.colors.green};
  padding: 13px 129px;
  width: 100%;
  border-radius: 60px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28em;
  display: flex;
  justify-content: center;
`;
