import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { generateNewToken } from "../auth/helpers";
import { AuthRouter } from "../auth/router/AuthRouter";
import { CartPage } from "../ecommer/pages/CartPage";
import { EcommerPage } from "../ecommer/pages/EcommerPage";
import { EcommerRouter } from "../ecommer/router/EcommerRouter";
import { login, logout } from "../store/auth/authSlice";

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

      console.log(token)
      dispatch(login(result));
      localStorage.setItem("token", result.token);
    };

    checkAuthToken();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {
          isAuthenticated === "authenticated" 
          ? <Route path="/*" element={<EcommerRouter />} />
          :<Route path="/auth/*" element={<AuthRouter />} />
        }
        <Route path="/" element={<EcommerPage />}/>
        <Route path="/cart" element={<CartPage />}/>
        <Route path="/*" element={<Navigate to="auth/login" />} />
      </Routes>
    </BrowserRouter>
  );
};
