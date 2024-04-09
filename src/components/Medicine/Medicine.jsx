import React, { useEffect } from "react";
import { Container, Title } from "./Medicine.styled";
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
        </Container>
      </section>
    </>
  );
};

export default Medicine;
