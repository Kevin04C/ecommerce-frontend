import React from "react";
import { useSelector } from "react-redux";
import { Product } from "./Product";

export const ProductList = () => {
  const { isLoading, products = [] } = useSelector((state) => state.ecommerce);
  return (
    <div className="pb-12">
      <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-12 text-gray-800">
        Todos nuestros productos disponibles
      </h2>

      {isLoading ? (
        <p>Cargando productos...</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {products.map((product) => (
            <Product key={crypto.randomUUID()} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};
