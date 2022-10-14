import React from "react";
import { useSelector } from "react-redux";
import { Product } from "./Product";
import { Spinner } from '../../auth/components/Spinner';

export const ProductList = () => {
  const { isLoading, products = [] } = useSelector((state) => state.ecommerce);
  return (
    <div className="pb-12">
      <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-12 text-gray-800">
        Todos nuestros <span className="text-red-500">LICORES</span> disponibles
      </h2>

      {isLoading ? (
        <div>
          <Spinner />
          <p className="text-center font-bold text-sm text-slate-600">Un momento, estamos cargando los productos</p>
        </div>
      ) : (
        <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {products.map((product) => (
            <Product key={crypto.randomUUID()} product={product} />
          ))}
        </section>
      )}
    </div>
  );
};
