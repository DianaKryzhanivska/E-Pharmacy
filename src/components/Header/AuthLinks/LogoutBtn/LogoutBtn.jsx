import React from "react";
import { useDispatch } from "react-redux";
import { logoutThunk } from "../../../../redux/auth/operations";
import { Btn } from "./LogoutBtn.styled";
import { useMediaQuery } from "react-responsive";

const LogoutBtn = ({ pageType }) => {
  const dispatch = useDispatch();

  const isDesktop = useMediaQuery({ query: "(min-width: 1440px)" });

  const handleLogoutClick = () => {
    dispatch(logoutThunk());
  };

  const btnColor = !isDesktop
    ? "#f1f1f1"
    : isDesktop && pageType === "home"
    ? "#f1f1f1"
    : "#59B17A";

  const btnBorder = !isDesktop
    ? "1px solid rgba(241, 241, 241, 0.50)"
    : isDesktop && pageType === "home"
    ? "1px solid rgba(241, 241, 241, 0.50)"
    : "1px solid rgba(89, 177, 122, 0.50)";

  return (
    <>
      <Btn
        style={{ color: btnColor, border: btnBorder }}
        onClick={handleLogoutClick}
      >
        Log out
      </Btn>
    </>
  );
};

export default LogoutBtn;
