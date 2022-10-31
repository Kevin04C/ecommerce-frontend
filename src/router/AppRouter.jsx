import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { generateNewToken } from "../auth/helpers";
import { AuthRouter } from "../auth/router/AuthRouter";
import { SearchPage } from "../ecommer/components/SearchPage";
import { EcommerPage } from "../ecommer/pages/EcommerPage";
import { ProductPage } from "../ecommer/pages/ProductPage";
import { SuccessPage } from "../ecommer/pages/SuccessPage";
import { EcommerRouter } from "../ecommer/router/EcommerRouter";
import { login, logout } from "../store/auth/authSlice";
import { setCart } from "../store/ecommer/ecommerceSlice";
import { startLoadingProducts } from "../store/ecommer/thunks";

export const AppRouter = () => {
  const { status } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const isAuthenticated = status; //'checking','not-authenticated','authenticated'"

  useEffect(() => {
    const checkAuthToken = async () => {
      const token = localStorage.getItem("token");
      if (!token || token === undefined) {
        return dispatch(logout());
      }
      const result = await generateNewToken(token);

      if (!result.ok) return dispatch(logout());

      dispatch(login(result));
      localStorage.setItem("token", result.token);
    };

    checkAuthToken();
    dispatch(startLoadingProducts());
    dispatch(setCart(JSON.parse(localStorage.getItem("cart")) || []));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {
          isAuthenticated === "authenticated" 
            ? <Route path="/*" element={<EcommerRouter />} />
            : <Route path="/auth/*" element={<AuthRouter />} />
        }
        
        <Route path="/" element={<EcommerPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/search" element={<SearchPage />} />

        <Route path="/*" element={<Navigate to="auth/login" />} />
      </Routes>
    </BrowserRouter>
  );
};
