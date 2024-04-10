import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 20px 20px 40px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 27px;

  & button {
    padding: 8px 25px;
    border-radius: 40px;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: -0.7px;
  }

  @media only screen and (min-width: 768px) {
    padding: 32px 32px 70px;
  }

  @media only screen and (min-width: 1440px) {
    padding: 40px 40px 80px;
  }
`;

export const BtnBox = styled.div`
  display: flex;
  gap: 8px;
`;

export const DescBtn = styled.button`
  background: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};
`;

export const ReviewsBtn = styled.button`
  background: rgba(89, 177, 122, 0.1);
  color: ${({ theme }) => theme.colors.green};
`;
