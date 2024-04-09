import React, { useEffect } from "react";
import {
  AddToCartBtn,
  BtnBox,
  Container,
  DetailsBtn,
  ImgBox,
  Info,
  List,
  Price,
  SubTitle,
  Text,
  Title,
} from "./Medicine.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectSearchProducts } from "../../redux/pharmacy/selectors";
import { getSearchProducts } from "../../redux/pharmacy/operations";

const Medicine = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectSearchProducts);

  useEffect(() => {
    dispatch(
      getSearchProducts({
        limit: 12,
      })
    );
  }, [dispatch]);

  console.log(products);

  return (
    <>
      <section>
        <Container>
          <Title>Medicine</Title>
          <List>
            {products?.map((product) => (
              <li key={product._id}>
                <ImgBox>
                  <img src={product.photo} alt="product" />
                </ImgBox>
                <Info>
                  <SubTitle>{product.name}</SubTitle>
                  <Text>{product.category}</Text>
                  <Price>{`৳${product.price}`}</Price>
                  <BtnBox>
                    <AddToCartBtn type="button">Add to cart</AddToCartBtn>
                    <DetailsBtn type="button">Details</DetailsBtn>
                  </BtnBox>
                </Info>
              </li>
            ))}
          </List>
        </Container>
      </section>
    </>
  );
};

export default Medicine;
