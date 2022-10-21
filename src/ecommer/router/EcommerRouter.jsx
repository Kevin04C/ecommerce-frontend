import { Navigate, Route, Routes } from "react-router-dom";
import { CartPage } from "../pages/CartPage";
import { EcommerPage } from "../pages/EcommerPage";
import { OrdersPage } from "../pages/OrdersPage";
import { ProductPage } from "../pages/ProductPage";
import { ProfilePage } from "../pages/ProfilePage";
import { Success } from "../pages/Success";

export const EcommerRouter = () => {
  return (
    <Routes>
      <Route path="/cart" element={<CartPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/orders" element={<OrdersPage />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
