import styled from "styled-components";
import { CommonContainer } from "styles/GlobalStyles";

export const Container = styled(CommonContainer)`
  padding-top: 64px;
  padding-bottom: 80px;
  background: ${({ theme }) => theme.colors.lightGray};
`;

export const ImgBox = styled.div`
  overflow: hidden;
  object-fit: cover;
  border-radius: 27px;
  border: 1.155px solid rgba(89, 177, 122, 0.6);
  margin-bottom: 8px;

  & img {
    width: 100%;
  }
`;

export const Info = styled.div`
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.white};
  padding: 20px;
  margin-bottom: 8px;
`;

export const NameWithPriceBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;

  & p {
    color: ${({ theme }) => theme.colors.black};
    font-size: 16px;
    font-weight: 600;
    line-height: 1.4em;
  }
`;

export const Text = styled.p`
  color: rgba(29, 30, 33, 0.6);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5em;
  margin-bottom: 32px;
`;

export const BtnBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AmountBox = styled.div`
  border-radius: 60px;
  border: 1px solid rgba(29, 30, 33, 0.1);
  padding: 12px 18px;
  display: flex;
  gap: 12px;
  align-items: center;

  & button {
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;

    & svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const AddToCartBtn = styled.button`
  padding: 13px 32px;
  background: ${({ theme }) => theme.colors.green};
  border-radius: 60px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28em;
`;

export const DescReviewBox = styled.div`
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
`;

export const DescReviewBtnBox = styled.div`
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
