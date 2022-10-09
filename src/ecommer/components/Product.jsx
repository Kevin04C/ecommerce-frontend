import React from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addProduct,
  incrementProduct,
} from "../../store/ecommer/ecommerceSlice";
import { capitalize } from "../helpers/capitalize";
import { formatMoney } from "../helpers/fomartMoney";

export const Product = ({ product }) => {
  const {
    nombreProducto,
    precioUnitario,
    descripcion,
    imagenProducto,
    idProductos,
  } = product;

  const { cart } = useSelector((state) => state.ecommerce);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleAddCart = () => {
    const productCart = {...product, cantidad: 1}
    const productExists = cart.find((p) => p.idProductos === idProductos);
    if (productExists) {
      dispatch(incrementProduct(idProductos));
    } else {
      dispatch(addProduct(productCart));
    }
    toast.success("Agregado al carrito");
  };

  const handleNavigateProduct = () => {
    navigate(`/product/${idProductos}`);
  };

  return (
    <article className="w-full bg-white rounded-2xl shadow-sm p-3 cursor-pointer border hover:shadow-md hover:scale-[1.05] transition-all">
      <picture onClick={handleNavigateProduct}>
        <img
          className="h-40 rounded-2xl mx-auto w-full aspect-auto object-contain"
          src={imagenProducto}
          alt={nombreProducto}
        />
      </picture>
      <div>
        <h4 className="mt-3 text-lg font-bold text-gray-700">
          {capitalize(nombreProducto)}
        </h4>
        <p className="text-xs text-gray-400">{capitalize(descripcion)}</p>

        <div className="flex justify-between items-center mt-3">
          <span className="text-xl font-bold text-gray-800">
            {formatMoney(precioUnitario)}
          </span>
          <span
            className="border px-2 rounded hover:bg-blue-500 hover:text-white text-gray-500 transition-all cursor-pointer"
            onClick={handleAddCart}
          >
            <i className="fa-solid fa-plus text-xl"></i>
          </span>
        </div>
      </div>
    </article>
  );
};
