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
`;
