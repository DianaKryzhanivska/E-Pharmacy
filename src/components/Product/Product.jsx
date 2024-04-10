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
  ImgInfoWrapper,
  Info,
  Name,
  NamePriceBox,
  Price,
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
          <ImgInfoWrapper>
            <ImgBox>
              <img src={product.photo} alt="product" />
            </ImgBox>
            <Info>
              <NamePriceBox>
                <div>
                  <Name>{product.name}</Name>
                  <Text>{product.category}</Text>
                </div>
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
            </Info>
          </ImgInfoWrapper>
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
