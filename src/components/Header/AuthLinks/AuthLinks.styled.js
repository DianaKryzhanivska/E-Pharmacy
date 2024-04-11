import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: center;
  width: 127px;
  margin-left: auto;
  margin-right: auto;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    width: 170px;
  }

  @media only screen and (min-width: 1440px) {
    margin-left: 0;
    margin-right: 0;
  }
`;

export const LogoutBtn = styled.button`
  background: transparent;
  padding: 13px 32px;
  border-radius: 60px;
  color: ${({ theme }) => theme.colors.subWhite};
  border: 1px solid ${({ theme }) => theme.borders.gray};
  font-size: 14px;
  font-weight: 400;
  line-height: 1em;

  @media only screen and (min-width: 768px) {
    padding: 16px 32px;
  }
`;
