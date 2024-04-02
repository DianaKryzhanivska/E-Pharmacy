import React, { useState } from "react";
import Logo from "./Logo/Logo";
import sprite from "../../images/sprite.svg";
import { BurgerBtn, Container } from "./Header.styled";
import Menu from "./Menu/Menu";

const Header = () => {
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
          <BurgerBtn type="button" onClick={handleOpenMenu}>
            <svg>
              <use href={`${sprite}#burger`} />
            </svg>
          </BurgerBtn>
        </Container>
      </header>
      <Menu isOpen={isMenuOpen} onClose={handleCloseMenu} />
    </>
  );
};

export default Header;
