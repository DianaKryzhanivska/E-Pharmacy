import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = () => {
  return (
    <main>
      <Header />
      <Suspense fallback="Loading...">
        <Outlet />
      </Suspense>
      <Footer />
    </main>
  );
};

export default Layout;
