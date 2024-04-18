import styled from "styled-components";

export const Btn = styled.button`
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

  @media only screen and (min-width: 1440px) {
    color: ${({ pageType }) => (pageType === "home" ? "#F1F1F1" : "#59B17A")};
    border: ${({ pageType }) =>
      pageType === "home"
        ? "1px solid rgba(241, 241, 241, 0.50)"
        : "1px solid rgba(89, 177, 122, 0.50)"};
  }
`;
