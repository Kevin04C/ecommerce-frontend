import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/auth/authSlice";

export const Options = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleProfile = () => navigate("/profile");
  const handleOrders = () => navigate("/orders");

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logout());
  };
  return (
    <div className="bg-white min-w-max px-3 rounded-md border shadow-sm animate__animated animate__fadeIn animate__faster absolute top-[38px] right-[-5px]">
      <ul className="text-center py-2">
        <li
          className="text-gray-500 hover:text-black transition-colors cursor-pointer mb-1"
          onClick={handleProfile}
        >
          Mi cuenta
        </li>
        <li
          className="text-gray-500 hover:text-black transition-colors cursor-pointer ml-2"
          onClick={handleOrders}
        >
          Mi pedidos
        </li>
        <li
          className="font-medium text-red-500 hover:text-red-700 transition-colors cursor-pointer"
          onClick={handleLogout}
        >
          Cerrar sesión
          <i className="fa-solid fa-arrow-right-from-bracket ml-2"></i>
        </li>
      </ul>
    </div>
  );
};
