import React from "react";
import { useDispatch } from "react-redux";
import { decrementProduct, deleteProduct, incrementProduct } from "../../store/ecommer/ecommerceSlice";
import { capitalize } from "../helpers/capitalize";
import { formatMoney } from "../helpers/fomartMoney";

export const CartProduct = ({ product }) => {
  const {
    nombreProducto,
    descripcion,
    precioUnitario,
    imagenProducto,
    cantidad,
    idProductos,
  } = product;

  const dispatch = useDispatch();

  const handleIncrementProduct = () => {
      dispatch(incrementProduct(idProductos));
  };

  const handleDecrementProduct = () => {
    dispatch(decrementProduct(idProductos))
  }

  const handleDeleteProduct = () => {
    dispatch(deleteProduct(idProductos))
  }


  return (
    <article className="bg-white p-3 rounded-md shadow mt-3 flex md:gap-5">
      <picture className="border rounded-lg p-2 mr-2 md:0">
        <img
          src={imagenProducto}
          alt={nombreProducto}
          className="w-24 h-24 object-contain mx-auto "
        />
      </picture>
      <div className="grow flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-700">
            {capitalize(nombreProducto)}
          </h3>
          <p className="text-sm text-gray-500">{capitalize(descripcion)}</p>
        </div>
        <div className="mt-3 md:mt-0 flex items-center gap-5">
          <span className="font-extrabold text-gray-900 grow">
            {formatMoney(precioUnitario)}
          </span>

          <p className="flex gap-2 font-bold grow">
            <button
              className="border leading-2 px-2 rounded- font-normal"
              onClick={handleIncrementProduct}
            >
              +
            </button>
            {cantidad}
            <button 
              className="border leading-2 px-2 rounded- font-normal"
              onClick={handleDecrementProduct}  
            >
              -
            </button>
          </p>
          <i 
            className="fa-solid fa-trash text-red-500 cursor-pointer hover:text-red-600 transition-all grow"
            onClick={handleDeleteProduct}
          ></i>
        </div>
      </div>
    </article>
  );
};
