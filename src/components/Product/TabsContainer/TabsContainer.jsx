import React from "react";
import { BtnBox, DescBtn, ReviewsBtn, Wrapper } from "./TabsContainer.styled";

const TabsContainer = () => {
  return (
    <>
      <Wrapper>
        <BtnBox>
          <DescBtn type="button">Description</DescBtn>
          <ReviewsBtn type="button">Reviews</ReviewsBtn>
        </BtnBox>
      </Wrapper>
    </>
  );
};

export default TabsContainer;
