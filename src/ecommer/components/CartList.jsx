import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../store/ecommer/ecommerceSlice";
import { CartProduct } from "./CartProduct";
import { DetailsOrder } from "./DetailsOrder";

export const CartList = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.ecommerce);

  const handleDeleteCart = () => {
    dispatch(clearCart());
    localStorage.removeItem("cart");
  };

  return (
    <section className="w-full">
      <h2 className="text-5xl font-black text-center">Mi carrito</h2>
      {cart.length === 0 ? (
          <p className="text-center font-bold text-xl md:text-2xl md:w-2/4 mx-auto text-gray-800 mt-5">
            <i className="fa-solid fa-circle-exclamation mr-2"></i>
            Tu carrito aún esta vacio empieza a agregar productos
          </p>
      ) : (
        <div className="flex flex-col-reverse md:flex-row mt-6 md:mt-12 gap-8">
          <div className="basis-7/12">
            {cart.map((cartProduct) => (
              <CartProduct key={crypto.randomUUID()} product={cartProduct} />
            ))}
            <div className="mt-5 max-w-max">
              <p
                className="bg-red-500 text-white p-2 rounded-md font-bold cursor-pointer hover:bg-red-600 transition-all"
                onClick={handleDeleteCart}
              >
                <i className="fa-solid fa-trash-can mr-2"></i>
                Eliminar todo mi carrito
              </p>
            </div>
          </div>
          <div className="basis-5/12 mt-5 md:mt-0">
            <DetailsOrder />
          </div>
        </div>
      )}
    </section>
  );
};
