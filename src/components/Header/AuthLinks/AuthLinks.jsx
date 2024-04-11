import React from "react";
import RegisterBtn from "./RegisterBtn/RegisterBtn";
import LoginBtn from "./LoginBtn/LoginBtn";
import { Wrapper, LogoutBtn } from "./AuthLinks.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../../redux/auth/selectors";
import { logoutThunk } from "../../../redux/auth/operations";

const AuthLinks = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleLogoutClick = () => {
    dispatch(logoutThunk());
  };

  return (
    <>
      <Wrapper>
        {isLoggedIn ? (
          <LogoutBtn onClick={handleLogoutClick}>Log out</LogoutBtn>
        ) : (
          <>
            <RegisterBtn />
            <LoginBtn />
          </>
        )}
      </Wrapper>
    </>
  );
};

export default AuthLinks;
