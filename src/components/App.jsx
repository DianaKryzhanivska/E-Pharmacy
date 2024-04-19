import LoginPage from "pages/LoginPage";
import RegisterPage from "pages/RegisterPage";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "pages/HomePage";
import MedicineStorePage from "pages/MedicineStorePage";
import MedicinePage from "pages/MedicinePage";
import ProductPage from "pages/ProductPage";
import CartPage from "pages/CartPage";
import NotFoundPage from "pages/NotFoundPage";
import PrivateRoute from "routes/PrivateRoute";

export const App = () => {
  return (
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<HomePage />} />
        <Route path="medicine-store" element={<MedicineStorePage />} />
        <Route path="medicine" element={<MedicinePage />} />
        <Route path="product" element={<ProductPage />} />
        <Route
          path="cart"
          element={
            <PrivateRoute>
              <CartPage />
            </PrivateRoute>
          }
        />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
