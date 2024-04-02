import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main>
      <header />
      <Suspense fallback="Loading...">
        <Outlet />
      </Suspense>
      <footer />
    </main>
  );
};

export default Layout;
