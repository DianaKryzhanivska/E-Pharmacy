import styled from "styled-components";

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 34px;
  margin-bottom: 302px;

  & li {
    text-align: center;
    background: ${({ theme }) => theme.colors.green};
  }

  & a {
    border-radius: 24px;
    padding: 8px 12px;
    color: ${({ theme }) => theme.colors.gray};
  }

  & a.active {
    color: ${({ theme }) => theme.colors.white};
  }
`;
