import React from "react";
import MainBanner from "./MainBanner/MainBanner";
import PromoBanners from "./PromoBanners/PromoBanners";
import AddPharmacyPromo from "./AddPharmacyPromo/AddPharmacyPromo";

const Home = () => {
  return (
    <>
      <MainBanner />
      <PromoBanners />
      <AddPharmacyPromo />
    </>
  );
};

export default Home;
