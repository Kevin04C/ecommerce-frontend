import React from "react";
import { capitalize } from "../helpers/capitalize";
import { formatMoney } from "../helpers/fomartMoney";

export const ProductOrder = ({ product }) => {
  const {
    imagenProducto,
    nombreProducto,
    nombreCategoria,
    precioUnitario,
    cantidad,
    totalVenta,
    fechaVenta,
  } = product;

  const newDate = new Date(fechaVenta).toLocaleDateString();

  return (
    <article className="bg-white border py-2 px-3 rounded-md md:flex gap-5 mb-3 md:mb-0 shadow-sm">
      <picture>
        <img
          src={imagenProducto}
          alt={nombreProducto}
          className="h-32 w-32 bg-blue-500 rounded border"
        />
      </picture>
      <div className="mt-3">
        <div>
          <h3 className="text-slate-900 font-bold text-xl">{nombreProducto}</h3>
          <span className="text-sm text-slate-600">
            <b>Categoría:</b> {capitalize(nombreCategoria)}
          </span>
          <span className="text-xl font-bold text-slate-600 block">
            {formatMoney(precioUnitario)}
          </span>
        </div>
        <div className="flex gap-5 mt-2 text-center">
          <p className="text-base text-slate-600">
            <b>Cantidad</b>: {cantidad}
          </p>
          <p className="text-base text-slate-600">
            <b>Total</b>: {formatMoney(totalVenta)}
          </p>
          <p className="text-base text-slate-600">
            <b>Fecha Compra:</b> {newDate}
          </p>
        </div>
      </div>
    </article>
  );
};
