import styled from "styled-components";
import { CommonContainer } from "styles/GlobalStyles";

export const Container = styled(CommonContainer)`
  padding-bottom: 80px;
  background: ${({ theme }) => theme.colors.lightGray};

  @media only screen and (min-width: 768px) {
    padding-bottom: 120px;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.14em;
  margin-bottom: 14px;

  @media only screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.2em;
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28em;
  margin-bottom: 40px;

  @media only screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25em;
    margin-bottom: 64px;
  }
`;

export const Wrapper = styled.div`
  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 32px 16px;
    width: 704px;
  }
`;

export const Item = styled.li`
  position: relative;
  padding: 32px 32px 40px;
  border-radius: 27px;
  border: 1.155px solid ${({ theme }) => theme.colors.subWhite};
  background: #e7f1ed;

  @media only screen and (min-width: 768px) {
    min-width: 344px;
    padding: 40px 40px 46px;
  }
`;

export const SubTitle = styled.h3`
  color: ${({ theme }) => theme.colors.black};
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4em;
  margin-bottom: 32px;
  max-width: 123px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media only screen and (min-width: 768px) {
    font-size: 20px;
    margin-bottom: 40px;
    max-width: 150px;
  }
`;

export const AddressBox = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 18px;

  & svg {
    width: 18px;
    height: 18px;
  }

  & ul {
    display: flex;
    flex-direction: column;
    gap: 4px;
    color: ${({ theme }) => theme.colors.gray};
    font-size: 14px;
    font-weight: 400;
    line-height: 1.28em;
  }

  @media only screen and (min-width: 768px) {
    margin-bottom: 14px;

    & ul {
      font-size: 16px;
      line-height: 1.25em;
    }
  }
`;

export const PhoneBox = styled.div`
  display: flex;
  gap: 8px;

  & svg {
    width: 18px;
    height: 18px;
  }

  & p {
    color: ${({ theme }) => theme.colors.gray};
    font-size: 14px;
    font-weight: 400;
    line-height: 1.28em;
  }

  @media only screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25em;
  }
`;

export const RatingWithBtn = styled.div`
  position: absolute;
  top: 32px;
  right: 32px;
  display: flex;
  gap: 14px;
  align-items: center;

  & button {
    text-transform: uppercase;
    padding: 8px 16px;
    border-radius: 8px;
    background: rgba(89, 177, 122, 0.1);
    color: #59b17a;
    font-size: 12px;
    font-weight: 600;
    line-height: 1.5em;
    letter-spacing: -0.24px;
  }

  @media only screen and (min-width: 768px) {
    top: 40px;
    right: 24px;
  }
`;

export const RatingBox = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;

  & svg {
    width: 16px;
    height: 16px;
  }

  & p {
    color: ${({ theme }) => theme.colors.black};
    font-size: 14px;
    font-weight: 500;
    line-height: 1.28em;
  }
`;
