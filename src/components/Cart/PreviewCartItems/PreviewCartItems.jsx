import React, { useEffect } from "react";
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
import {
  addToCart,
  deleteFromCart,
  getCartItems,
} from "../../../redux/pharmacy/operations";

const PreviewCartItems = () => {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const cartItemsQuantity = cart?.cartProducts?.length || 0;

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch, cartItemsQuantity]);

  const handleIncreaseAmount = (id) => {
    dispatch(
      addToCart({
        productId: id,
        quantity: 1,
      })
    );
  };

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
                    <button
                      type="button"
                      onClick={() =>
                        handleIncreaseAmount(product.productId._id)
                      }
                    >
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
