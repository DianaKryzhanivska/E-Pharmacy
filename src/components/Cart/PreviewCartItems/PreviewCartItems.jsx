import React from "react";
import { useSelector } from "react-redux";
import { selectCart } from "../../../redux/pharmacy/selectors";
import {
  AmountBox,
  BtnBox,
  ImgBox,
  Item,
  Price,
  RemoveBtn,
  Subtitle,
  Text,
} from "./PreviewCartItems.styled";
import sprite from "../../../images/sprite.svg";

const PreviewCartItems = () => {
  const cart = useSelector(selectCart);
  return (
    <>
      <div>
        <ul>
          {cart?.cartProducts?.map((product) => (
            <Item key={product.productId._id}>
              <ImgBox>
                <img src={product.productId.photo} alt="product" />
              </ImgBox>
              <div>
                <Subtitle>{product.productId.name}</Subtitle>
                <Text>{product.productId.category}</Text>
                <Price>{`৳ ${product.productId.price}`}</Price>
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
              </div>
            </Item>
          ))}
        </ul>
      </div>
    </>
  );
};

export default PreviewCartItems;
