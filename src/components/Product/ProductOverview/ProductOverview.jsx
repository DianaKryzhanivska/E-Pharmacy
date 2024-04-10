import React from "react";
import { useSelector } from "react-redux";
import { selectProduct } from "../../../redux/pharmacy/selectors";
import sprite from "../../../images/sprite.svg";
import {
  AddToCartBtn,
  AmountBox,
  BtnBox,
  ImgBox,
  InfoBox,
  Name,
  NamePriceBox,
  Price,
  Text,
  Wrapper,
} from "./ProductOverview.styled";

const ProductOverview = () => {
  const product = useSelector(selectProduct);
  return (
    <>
      <Wrapper>
        <ImgBox>
          <img src={product.photo} alt="product" />
        </ImgBox>
        <InfoBox>
          <NamePriceBox>
            <>
              <Name>{product.name}</Name>
              <Text>{product.category}</Text>
            </>
            <Price>{`৳${product.price}`}</Price>
          </NamePriceBox>
          <BtnBox>
            <AmountBox>
              <button type="button">
                <svg>
                  <use href={`${sprite}#plus`} />
                </svg>
              </button>
              <p>0</p>
              <button type="button">
                <svg>
                  <use href={`${sprite}#minus`} />
                </svg>
              </button>
            </AmountBox>
            <AddToCartBtn type="button">Add to cart</AddToCartBtn>
          </BtnBox>
        </InfoBox>
      </Wrapper>
    </>
  );
};

export default ProductOverview;
