import { Navigate, Route, Routes } from "react-router-dom";
import { CartPage } from "../pages/CartPage";
import { OrdersPage } from "../pages/OrdersPage";
import { ProfilePage } from "../pages/ProfilePage";

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
