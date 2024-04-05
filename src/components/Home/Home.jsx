import React from "react";
import MainBanner from "./MainBanner/MainBanner";
import PromoBanners from "./PromoBanners/PromoBanners";
import AddPharmacyPromo from "./AddPharmacyPromo/AddPharmacyPromo";
import Reviews from "./Reviews/Reviews";

const Home = () => {
  return (
    <>
      <MainBanner />
      <PromoBanners />
      <AddPharmacyPromo />
      <Reviews />
    </>
  );
};

export default Home;
