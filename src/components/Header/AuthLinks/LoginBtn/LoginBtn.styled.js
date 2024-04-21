import styled from "styled-components";

export const Btn = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.colors.subWhite};
  font-size: 14px;
  font-weight: 400;
  text-decoration: underline;

  @media only screen and (min-width: 1440px) {
    color: ${({ theme, pageType }) =>
      pageType === "home" ? "#F1F1F1" : theme.colors.green};
  }
`;
