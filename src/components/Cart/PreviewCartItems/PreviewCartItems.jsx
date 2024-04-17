import React from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { deleteFromCart } from "../../../redux/pharmacy/operations";

const PreviewCartItems = () => {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);

  const handleDeleteProduct = (id) => {
    console.log(id);
    dispatch(deleteFromCart(id));
  };

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
                  <RemoveBtn
                    type="button"
                    onClick={() => handleDeleteProduct(product.productId._id)}
                  >
                    Remove
                  </RemoveBtn>
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
