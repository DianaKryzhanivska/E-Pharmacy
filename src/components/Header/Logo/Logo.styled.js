import styled from "styled-components";

export const LogoBox = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;

  & svg {
    width: 32px;
    height: 32px;
  }

  & a {
    color: ${({ theme }) => theme.colors.black};
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -0.48px;
  }
`;
