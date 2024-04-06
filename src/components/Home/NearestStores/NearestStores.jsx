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
  Text,
  Title,
} from "./NearestStores.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectNearestStores } from "../../../redux/pharmacy/selectors";
import { getNearestStores } from "../../../redux/pharmacy/operations";
import sprite from "../../../images/sprite.svg";

const NearestStores = () => {
  const dispatch = useDispatch();
  const nearestStores = useSelector(selectNearestStores);

  useEffect(() => {
    dispatch(
      getNearestStores({
        limit: 6,
      })
    );
  }, [dispatch]);

  return (
    <>
      <section>
        <Container>
          <Title>Your Nearest Medicine Store</Title>
          <Text>Search for Medicine, Filter by your location</Text>
          <List>
            {nearestStores?.map((store) => (
              <Item key={store._id}>
                <SubTitle>{store.name}</SubTitle>
                <AddressBox>
                  <svg>
                    <use href={`${sprite}#logo`} />
                  </svg>
                  <ul>
                    <li>{store.address}</li>
                    <li>{store.city}</li>
                  </ul>
                </AddressBox>
                <PhoneBox>
                  <svg>
                    <use href={`${sprite}#logo`} />
                  </svg>
                  <p>{store.phone}</p>
                </PhoneBox>
                <RatingWithBtn>
                  <RatingBox>
                    <svg>
                      <use href={`${sprite}#logo`} />
                    </svg>
                    <p>{store.rating}</p>
                  </RatingBox>
                  <button type="button">open</button>
                </RatingWithBtn>
              </Item>
            ))}
          </List>
        </Container>
      </section>
    </>
  );
};

export default NearestStores;
