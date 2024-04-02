import React from "react";
import { Icon, Wrapper } from "./SocialMediaIcons.styled";
import sprite from "../../../images/sprite.svg";

const SocialMediaIcons = () => {
  return (
    <>
      <Wrapper>
        <Icon>
          <svg>
            <use href={`${sprite}#close`} />
          </svg>
        </Icon>
        <Icon>
          <svg>
            <use href={`${sprite}#close`} />
          </svg>
        </Icon>
        <Icon>
          <svg>
            <use href={`${sprite}#close`} />
          </svg>
        </Icon>
      </Wrapper>
    </>
  );
};

export default SocialMediaIcons;
