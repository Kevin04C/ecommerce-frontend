import React from "react";
import { capitalize } from "../helpers/capitalize";
import { formatMoney } from "../helpers/fomartMoney";

export const Product = ({ product }) => {
  const { nombreProducto, precioUnitario, descripcion, imagenProducto } =
    product;

  function toBase64(arr) {
    //arr = new Uint8Array(arr) if it's an ArrayBuffer
    return btoa(
      arr.reduce((data, byte) => data + String.fromCharCode(byte), "")
    );
  }
  console.log(`data:image/png;base64,${toBase64(imagenProducto.data)}`);

  return (
    <article className="w-full bg-white rounded-2xl shadow-sm p-3 cursor-pointer border hover:shadow-md hover:scale-[1.05] transition-all">
      <picture>
        <img className="h-40 rounded-2xl mx-auto w-full aspect-auto object-contain" src={`data:image/png;base64,${toBase64(imagenProducto.data)}`} alt={nombreProducto}/>
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
          <span className="border px-2 rounded hover:bg-blue-500 hover:text-white text-gray-500 transition-all cursor-pointer">
            <i className="fa-solid fa-plus text-xl"></i>
          </span>
        </div>
      </div>
    </article>
  );
};
