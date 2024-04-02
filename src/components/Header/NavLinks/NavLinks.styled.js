import styled from "styled-components";

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 34px;
  margin-bottom: 302px;

  & li {
    text-align: center;
  }

  & a {
    border-radius: 24px;
    padding: 8px 12px;
    font-size: 14px;
    font-weight: 400;
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.gray};
  }

  & a.active {
    background: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.white};
  }

  @media only screen and (min-width: 768px) {
    margin-bottom: 422px;
  }

  @media only screen and (min-width: 1440px) {
    flex-direction: row;
    margin-bottom: 0;
    gap: 48px;

    & a {
      background: ${({ theme }) => theme.colors.white};
    }

    & a.active {
      background: ${({ theme }) => theme.colors.green};
    }
  }
`;
