import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
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
  color: ${({ theme }) => theme.colors.green};
  border: 1px solid rgba(89, 177, 122, 0.5);
  font-size: 14px;
  font-weight: 400;
  line-height: 1em;

  @media only screen and (min-width: 768px) {
    padding: 16px 32px;
  }
`;
