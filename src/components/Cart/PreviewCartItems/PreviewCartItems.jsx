import React from "react";
import { useSelector } from "react-redux";
import { selectCart } from "../../../redux/pharmacy/selectors";
import {
  AmountBox,
  BtnBox,
  ImgBox,
  Item,
  List,
  MainTextWrap,
  Price,
  RemoveBtn,
  Subtitle,
  Text,
  TextBox,
} from "./PreviewCartItems.styled";
import sprite from "../../../images/sprite.svg";

const PreviewCartItems = () => {
  const cart = useSelector(selectCart);
  return (
    <>
      <div>
        <List>
          {cart?.cartProducts?.map((product) => (
            <Item key={product.productId._id}>
              <ImgBox>
                <img src={product.productId.photo} alt="product" />
              </ImgBox>
              <TextBox>
                <MainTextWrap>
                  <div>
                    <Subtitle>{product.productId.name}</Subtitle>
                    <Text>{product.productId.category}</Text>
                  </div>
                  <Price>{`৳ ${product.productId.price}`}</Price>
                </MainTextWrap>
                <BtnBox>
                  <AmountBox>
                    <button type="button">
                      <svg>
                        <use href={`${sprite}#plus`} />
                      </svg>
                    </button>
                    <p>{product.quantity}</p>
                    <button type="button">
                      <svg>
                        <use href={`${sprite}#minus`} />
                      </svg>
                    </button>
                  </AmountBox>
                  <RemoveBtn type="button">Remove</RemoveBtn>
                </BtnBox>
              </TextBox>
            </Item>
          ))}
        </List>
      </div>
    </>
  );
};

export default PreviewCartItems;
