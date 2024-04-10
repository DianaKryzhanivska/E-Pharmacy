import React from "react";
import {
  AddToCartBtn,
  AmountBox,
  BtnBox,
  Container,
  DescBtn,
  DescReviewBox,
  DescReviewBtnBox,
  ImgBox,
  Info,
  NameWithPriceBox,
  ReviewsBtn,
  Text,
} from "./Product.styled";
import { useSelector } from "react-redux";
import { selectProduct } from "../../redux/pharmacy/selectors";
import sprite from "../../images/sprite.svg";

const Product = () => {
  const product = useSelector(selectProduct);
  return (
    <>
      <section>
        <Container>
          <ImgBox>
            <img src={product.photo} alt="product" />
          </ImgBox>
          <Info>
            <NameWithPriceBox>
              <p>{product.name}</p>
              <p>{`৳${product.price}`}</p>
            </NameWithPriceBox>
            <Text>{product.category}</Text>
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
          </Info>
          <DescReviewBox>
            <DescReviewBtnBox>
              <DescBtn type="button">Description</DescBtn>
              <ReviewsBtn type="button">Reviews</ReviewsBtn>
            </DescReviewBtnBox>
          </DescReviewBox>
        </Container>
      </section>
    </>
  );
};

export default Product;
