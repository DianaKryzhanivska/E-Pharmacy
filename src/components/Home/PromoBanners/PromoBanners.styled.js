import styled from "styled-components";
import { CommonContainer } from "styles/GlobalStyles";

export const Container = styled(CommonContainer)`
  padding-top: 40px;
  padding-bottom: 40px;
  background: ${({ theme }) => theme.colors.lightGray};
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Banner = styled.li`
  background: ${({ theme }) => theme.colors.backWhite};
  padding: 14px 18px;
  border-radius: 27px;
  border: 1.155px solid #f1f1f1;
  box-shadow: 0px -1px 13.858px 0px rgba(29, 30, 33, 0.02);
`;

export const RoundWithTitle = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
  margin-bottom: 14px;
`;

export const Round = styled.div`
  width: 54px;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(231, 241, 237, 0.4);
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.green};
  font-size: 24px;
  font-weight: 400;
  line-height: 1em;
`;

export const Title = styled.h3`
  color: #252539;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.4em;
`;

export const Box = styled.div`
  display: flex;
  width: 145px;
  align-items: baseline;
  justify-content: space-between;
`;

export const Percentage = styled.p`
  color: #252539;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.4em;
`;

export const Btn = styled.button`
  background: transparent;
  color: #93939a;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4em;
`;
