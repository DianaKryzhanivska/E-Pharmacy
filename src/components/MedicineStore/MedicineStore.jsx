import React, { useEffect } from "react";
import {
  AddressBox,
  Container,
  Item,
  List,
  PhoneBox,
  RatingBox,
  RatingWithBtn,
  SubTitle,
  Title,
  VisitStoreBtn,
  Wrapper,
} from "./MedicineStore.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectAllStores } from "../../redux/pharmacy/selectors";
import { getAllStores } from "../../redux/pharmacy/operations";
import sprite from "../../images/sprite.svg";
import { useMediaQuery } from "react-responsive";
import { NavLink } from "react-router-dom";

const MedicineStore = () => {
  const dispatch = useDispatch();
  const stores = useSelector(selectAllStores);
  const isDesktop = useMediaQuery({ query: "(min-width: 1440px)" });
  const isTabletOrDesktop = useMediaQuery({ query: "(min-width: 768px)" });
  const storesLimit = isDesktop ? 9 : 8;

  useEffect(() => {
    dispatch(
      getAllStores({
        limit: storesLimit,
      })
    );
  }, [dispatch, storesLimit]);

  return (
    <>
      <section>
        <Container>
          <Title>Medicine store</Title>
          <Wrapper>
            <List>
              {stores?.map((store) => (
                <Item key={store._id}>
                  <SubTitle>{store.name}</SubTitle>
                  <AddressBox>
                    <svg>
                      <use href={`${sprite}#map`} />
                    </svg>
                    <ul>
                      <li>{store.address}</li>
                      <li>{store.city}</li>
                    </ul>
                  </AddressBox>
                  <PhoneBox>
                    <svg>
                      <use href={`${sprite}#phone`} />
                    </svg>
                    <p>{store.phone}</p>
                  </PhoneBox>
                  {isTabletOrDesktop && (
                    <VisitStoreBtn type="button">
                      <NavLink to="/medicine">Visit Store</NavLink>
                    </VisitStoreBtn>
                  )}
                  <RatingWithBtn>
                    <RatingBox>
                      <svg>
                        <use href={`${sprite}#star`} />
                      </svg>
                      <p>{store.rating}</p>
                    </RatingBox>
                    <button type="button">open</button>
                  </RatingWithBtn>
                </Item>
              ))}
            </List>
          </Wrapper>
        </Container>
      </section>
    </>
  );
};

export default MedicineStore;
