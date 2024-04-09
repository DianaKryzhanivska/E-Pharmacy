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

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ImgBox = styled.div`
  border-radius: 20px;
  border: 1.155px solid rgba(89, 177, 122, 0.6);
  overflow: hidden;
  margin-bottom: 8px;

  & img {
    width: 335px;
    height: 300px;
  }
`;

export const Info = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  padding: 20px;
`;

export const SubTitle = styled.h3`
  color: ${({ theme }) => theme.colors.black};
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4em;
  margin-bottom: 4px;
`;

export const Text = styled.p`
  color: rgba(29, 30, 33, 0.6);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5em;
  margin-bottom: 17px;
`;

export const Price = styled.p`
  position: absolute;
  top: 20px;
  right: 20px;
  color: ${({ theme }) => theme.colors.black};
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4em;
`;

export const BtnBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AddToCartBtn = styled.button`
  padding: 10px 16px;
  background: ${({ theme }) => theme.colors.green};
  border-radius: 24px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  font-weight: 500;
  line-height: 1em;
`;

export const DetailsBtn = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.colors.black};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5em;
  text-decoration: underline;
`;
