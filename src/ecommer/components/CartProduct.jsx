import React, { useMemo } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementProduct,
  deleteProduct,
  finishSaving,
  incrementProduct,
  startLoading,
  startSaving,
} from "../../store/ecommer/ecommerceSlice";
import { capitalize } from "../helpers/capitalize";
import { formatMoney } from "../helpers/fomartMoney";
import { deleteProductCart, updateDecrementProductCart, updateProductCart } from "../helpers/helpersEcommerce";
import { SavingSpinner } from "./SavingSpinner";

export const CartProduct = ({ product }) => {
  const {
    nombreProducto,
    descripcion,
    precioUnitario,
    imagenProducto,
    cantidadCarrito,
    idProductos,
    stock,
    idCarrito,
  } = product;


  const { isSaving } = useSelector((state) => state.ecommerce);
  const dispatch = useDispatch();

  const newDescripcion = useMemo(() => descripcion.length > 57 ? `${descripcion.slice(0, 57)}...`:descripcion, [descripcion]);

  const handleIncrementProduct = async () => {
    const id = toast.loading("Un momento...")
    dispatch(startSaving());
    
    const res = await updateProductCart(idCarrito, {product: idProductos, quantity: 1});
    dispatch(finishSaving());
    toast.dismiss(id);
    
    if(!res.ok) return toast.error(res.message);
    toast.success(res.message);
    dispatch(incrementProduct(idProductos))
  };

  const handleDecrementProduct = async () => {
    if (cantidadCarrito <= 1) return;
    const id = toast.loading("Un momento...");
    dispatch(startSaving())

    const res = await updateDecrementProductCart(idCarrito, {quantity: cantidadCarrito - 1});
    dispatch(finishSaving());
    toast.dismiss(id);

    if(!res.ok) return toast.error(err.mesage || "Hubo un error");
    dispatch(decrementProduct(idProductos));
    toast.success(res.message);
  };

  const handleDeleteProduct = async () => {
    dispatch(startSaving());

    const res = await deleteProductCart(idCarrito);
    dispatch(finishSaving());
    
    if (!res.ok) return toast.error("Hubo un error");
    dispatch(deleteProduct(idProductos));
    toast.success(res.message);
  };

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
          <p className="text-sm text-gray-500 mb-1 ">
            {capitalize(newDescripcion)}
          </p>
          <span className="text-xs rounded-md text-slate-700">
            <b className="text-red-500">Stock:</b> {stock}
          </span>
        </div>
        <div className="mt-3 md:mt-0 flex items-center justify-center gap-5">
          <span className="font-extrabold text-gray-900 grow">
            {formatMoney(precioUnitario)}
          </span>

          <div className="flex gap-2 items-center font-bold grow">
            <button
              className="border leading-2 px-2 rounded font-normal"
              onClick={handleIncrementProduct}
              disabled={isSaving}
            >
              +
            </button>
            {cantidadCarrito}
            <button
              className="border leading-2 px-2 rounded font-normal"
              onClick={handleDecrementProduct}
              disabled={isSaving}
            >
              -
            </button>
            <button 
              className="block mx-auto"
              disabled={isSaving}
              >
              <i
                className="fa-solid fa-trash text-red-500 cursor-pointer hover:text-red-600 transition-all grow text-center"
                onClick={handleDeleteProduct}
              ></i>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
