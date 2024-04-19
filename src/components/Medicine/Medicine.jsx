import React, { useEffect, useState } from "react";
import {
  AddToCartBtn,
  BtnBox,
  Container,
  DetailsBtn,
  ImgBox,
  Info,
  Item,
  List,
  NameWithPriceBox,
  Price,
  SubTitle,
  Text,
  Title,
} from "./Medicine.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectSearchProducts } from "../../redux/pharmacy/selectors";
import {
  addToCart,
  getProductById,
  getSearchProducts,
} from "../../redux/pharmacy/operations";
import { useNavigate } from "react-router-dom";
import Modal from "components/Modal/Modal";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import SignIn from "components/Modal/SignIn/SignIn";

const Medicine = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectSearchProducts);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    dispatch(
      getSearchProducts({
        limit: 12,
      })
    );
  }, [dispatch]);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleAddToCart = (id) => {
    if (!isLoggedIn) {
      handleOpenModal();
    } else {
      dispatch(
        addToCart({
          productId: id,
          quantity: 1,
        })
      );
    }
  };

  const handleDetailsClick = (id) => {
    dispatch(getProductById(id)).then(() => {
      navigate("/product");
    });
  };

  return (
    <>
      <section>
        <Container>
          <Title>Medicine</Title>
          <List>
            {products?.map((product) => (
              <Item key={product._id}>
                <ImgBox>
                  <img src={product.photo} alt="product" />
                </ImgBox>
                <Info>
                  <NameWithPriceBox>
                    <SubTitle>{product.name}</SubTitle>
                    <Price>{`৳${product.price}`}</Price>
                  </NameWithPriceBox>
                  <Text>{product.category}</Text>
                  <BtnBox>
                    <AddToCartBtn
                      type="button"
                      onClick={() => handleAddToCart(product._id)}
                    >
                      Add to cart
                    </AddToCartBtn>
                    <DetailsBtn
                      type="button"
                      onClick={() => handleDetailsClick(product._id)}
                    >
                      Details
                    </DetailsBtn>
                  </BtnBox>
                </Info>
              </Item>
            ))}
          </List>
        </Container>
      </section>
      <Modal isOpen={openModal} onClose={handleCloseModal}>
        <SignIn onClose={handleCloseModal} />
      </Modal>
    </>
  );
};

export default Medicine;
