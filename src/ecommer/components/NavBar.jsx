import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Options } from "./Options";

export const NavBar = () => {
  const { status,id } = useSelector((state) => state.auth);
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
      <nav className="bg-white border border-b shadow-sm py-4 px-3 sticky left-0 top-0 z-20">
        <div className="md:max-w-7xl mx-auto md:flex-row flex flex-col justify-between items-center relative">
          <h2
            className="text-xl md:text-2xl font-bold cursor-pointer mb-3 md:mb-0"
            onClick={handleClickHome}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-tr from-red-900 to-red-500"> <i className="fa-solid fa-martini-glass"></i> LICOR</span> STORE
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
                  className="text-gray-600  md:text-lg hover:text-black cursor-pointer transition-colors"
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
