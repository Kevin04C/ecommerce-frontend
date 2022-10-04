import React from "react";
import { LayoutEcommerce } from "../layout/LayoutEcommerce";

export const CartPage = () => {
  return (
    <LayoutEcommerce>
      <p className="text-center font-bold text-xl md:text-2xl md:w-2/4 mx-auto text-gray-800">
        <i className="fa-solid fa-circle-exclamation mr-2"></i>
        Tu carrito aún esta vacio empieza a agregar productos
      </p>
    </LayoutEcommerce>
  );
};
