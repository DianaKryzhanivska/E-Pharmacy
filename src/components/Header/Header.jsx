import React, { useState } from "react";
import Logo from "./Logo/Logo";
import sprite from "../../images/sprite.svg";
import { BurgerBtn, Container } from "./Header.styled";
import Menu from "./Menu/Menu";
import { useMediaQuery } from "react-responsive";
import NavLinks from "./NavLinks/NavLinks";
import AuthLinks from "./AuthLinks/AuthLinks";

const Header = () => {
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
          {!isDesktop && (
            <BurgerBtn type="button" onClick={handleOpenMenu}>
              <svg>
                <use href={`${sprite}#burger`} />
              </svg>
            </BurgerBtn>
          )}
          {isDesktop && <NavLinks />}
          {isDesktop && <AuthLinks />}
        </Container>
      </header>
      <Menu isOpen={isMenuOpen} onClose={handleCloseMenu} />
    </>
  );
};

export default Header;
