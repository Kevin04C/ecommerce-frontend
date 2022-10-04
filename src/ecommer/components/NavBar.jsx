import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Options } from "./Options";

export const NavBar = () => {
  const { status } = useSelector((state) => state.auth);
  const [showOptions, setShowOptions] = useState(false);
  const { nombre } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  const handleChangeOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleClickHome = () => navigate("/");
  const handleClickCart = () => navigate("/cart");
  const handleLogin = () => navigate("/auth/login");

  return (
    <>
      <nav className="bg-white border border-b shadow-sm py-4 px-3">
        <div className="md:max-w-7xl mx-auto flex justify-between items-center relative">
          <h2
            className="text-2xl font-bold cursor-pointer"
            onClick={handleClickHome}
          >
            Logo
          </h2>
          <div className="flex gap-5 md:gap-8 ">
            {status === "authenticated" ? (
              <>
                <p
                  className="text-gray-600 md:text-lg hover:text-black cursor-pointer transition-colors"
                  onClick={handleClickCart}
                >
                  <i className="fa-solid fa-cart-shopping mr-3"></i>
                  Mi carrito
                </p>
                <p
                  className="text-gray-600 md:text-lg hover:text-black cursor-pointer transition-colors "
                  onClick={handleChangeOptions}
                >
                  <i className="fa-solid fa-user mr-2"></i>
                  {nombre}
                </p>
                {showOptions && <Options />}
              </>
            ) : (
              <>
                <p
                  className="text-gray-600 md:text-lg hover:text-black cursor-pointer transition-colors"
                  onClick={handleClickCart}
                >
                  <i className="fa-solid fa-cart-shopping mr-3"></i>
                  Mi carrito
                </p>
                <p
                  className="text-gray-600 font-semibold md:text-lg hover:text-black cursor-pointer transition-colors"
                  onClick={handleLogin}
                >
                  <i className="fa-solid fa-user mr-2"></i>
                  Iniciar Sesión
                </p>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};
