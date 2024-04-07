import React from "react";
import { Icon, Wrapper } from "./SocialMediaIcons.styled";
import sprite from "../../../images/sprite.svg";

const SocialMediaIcons = () => {
  return (
    <>
      <Wrapper>
        <Icon>
          <svg>
            <use href={`${sprite}#facebook`} />
          </svg>
        </Icon>
        <Icon>
          <svg>
            <use href={`${sprite}#instagram`} />
          </svg>
        </Icon>
        <Icon>
          <svg>
            <use href={`${sprite}#youtube`} />
          </svg>
        </Icon>
      </Wrapper>
    </>
  );
};

export default SocialMediaIcons;
