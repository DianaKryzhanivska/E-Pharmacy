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
  padding: 13px 28px;
  border-radius: 60px;
  color: #f1f1f1;
  border: 1px solid rgba(241, 241, 241, 0.5);
  font-size: 14px;
  font-weight: 400;
  line-height: 1em;

  @media only screen and (min-width: 768px) {
    padding: 15px 32px;
  }

  @media only screen and (min-width: 1440px) {
    border: 1px solid rgba(89, 177, 122, 0.5);
    color: ${({ theme, pageType }) =>
      pageType === "home" ? "#f1f1f1" : theme.colors.green};
    border: ${({ pageType }) =>
      pageType === "home"
        ? "1px solid rgba(241, 241, 241, 0.50)"
        : "1px solid rgba(89, 177, 122, 0.50)"};
  }
`;
