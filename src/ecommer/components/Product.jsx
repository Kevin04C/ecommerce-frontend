import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();

  const newDescripcion = useMemo(() => descripcion.length > 57  ? `${descripcion.slice(0,57)}...` : descripcion , [descripcion])

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
        <p className="text-xs md:text-sm  text-gray-400">{capitalize(newDescripcion)}</p>

        <div className="flex justify-between items-center mt-3">
          <span className="text-xl font-bold text-gray-800">
            {formatMoney(precioUnitario)}
          </span>
        </div>
      </div>
    </article>
  );
};
