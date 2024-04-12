import React, { useState } from "react";
import Logo from "./Logo/Logo";
import sprite from "../../images/sprite.svg";
import { Box, BurgerBtn, Container, Wrapper } from "./Header.styled";
import Menu from "./Menu/Menu";
import { useMediaQuery } from "react-responsive";
import NavLinks from "./NavLinks/NavLinks";
import AuthLinks from "./AuthLinks/AuthLinks";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import UserIcons from "./UserIcons/UserIcons";

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const isDesktop = useMediaQuery({
    query: "(min-width: 1440px)",
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header>
        <Container>
          <Logo />
          {isLoggedIn && !isDesktop && (
            <Wrapper>
              <UserIcons />
              <BurgerBtn type="button" onClick={handleOpenMenu}>
                <svg>
                  <use href={`${sprite}#burger`} />
                </svg>
              </BurgerBtn>
            </Wrapper>
          )}
          {!isLoggedIn && !isDesktop && (
            <BurgerBtn type="button" onClick={handleOpenMenu}>
              <svg>
                <use href={`${sprite}#burger`} />
              </svg>
            </BurgerBtn>
          )}
          {isLoggedIn && isDesktop && (
            <>
              <NavLinks />
              <Box>
                <UserIcons />
                <AuthLinks />
              </Box>
            </>
          )}
          {!isLoggedIn && isDesktop && (
            <>
              <NavLinks />
              <AuthLinks />
            </>
          )}
        </Container>
      </header>
      <Menu isOpen={isMenuOpen} onClose={handleCloseMenu} />
    </>
  );
};

export default Header;
