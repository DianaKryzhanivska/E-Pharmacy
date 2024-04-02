import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavLinkStyled = styled(NavLink)`
  display: flex;
  gap: 12px;
  align-items: center;

  & svg {
    width: 32px;
    height: 32px;
  }

  & p {
    color: ${({ theme }) => theme.colors.black};
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -0.48px;
  }
`;
