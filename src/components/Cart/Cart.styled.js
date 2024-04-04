import styled from "styled-components";
import { CommonContainer } from "styles/GlobalStyles";

export const Container = styled(CommonContainer)`
  padding-top: 64px;
  padding-bottom: 80px;
  background: ${({ theme }) => theme.colors.lightGray};
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  font-size: 28px;
  font-weight: 600;
  line-height: 1.14em;
  margin-bottom: 40px;
`;

export const Form = styled.form`
  padding: 20px 20px 40px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 27px;
  margin-bottom: 80px;
`;

export const SubTitle = styled.h3`
  color: ${({ theme }) => theme.colors.black};
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4em;
  margin-bottom: 12px;
`;

export const Text = styled.p`
  color: #6a6a6f;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28em;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(29, 30, 33, 0.1);

  & label {
    color: ${({ theme }) => theme.colors.black};
    font-size: 14px;
    font-weight: 600;
    line-height: 1.28em;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  & input {
    padding: 13px 18px;
    border-radius: 27px;
    background: transparent;
    border: 1px solid rgba(29, 30, 33, 0.2);
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5em;
  }
`;

export const PaymentBox = styled.div`
  padding-top: 38px;
  padding-bottom: 41px;
  border-bottom: rgba(29, 30, 33, 0.1);
`;

export const RadioBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 21px;

  & label {
    color: ${({ theme }) => theme.colors.black};
    font-size: 14px;
    font-weight: 400;
    line-height: 1.28em;
    display: flex;
    gap: 9px;
  }
`;

export const TotalBox = styled.div`
  border-radius: 8px;
  background: #e7f1ed;
  padding: 14px 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;

  & p {
    color: ${({ theme }) => theme.colors.black};
    font-size: 16px;
    font-weight: 600;
    line-height: 1.4em;
  }
`;

export const SubmitBtn = styled.button`
  padding: 13px 32px;
  background: ${({ theme }) => theme.colors.green};
  border-radius: 60px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28em;
`;
