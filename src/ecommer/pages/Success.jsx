import React from "react";
import { LayoutEcommerce } from "../layout/LayoutEcommerce";
import queryString from "query-string";
import { useLocation } from "react-router-dom";

export const Success = () => {
  const { search } = useLocation();
  const { payment_id, status } = queryString.parse(search);

  if (status !== "approved")
    return (
      <LayoutEcommerce>
        <h1 className="font-bold text-center text-4xl text-red-500">Ups, hubo un error</h1>
      </LayoutEcommerce>
    );
  return (
    <LayoutEcommerce className="my-10">
      <section className="text-center md:w-2/4">
        <i class="fa-solid fa-check text-green-500 text-6xl md:text-8xl"></i>
        <h1 className="text-4xl md:text-7xl text-slate-900 font-bold mb-7">
          Gracias por tu compra
        </h1>
        <p className="text-xl md:text-2xl font-semibold text-slate-500">
          Tu pago se realizó con éxito, tu ID de pago es:{" "}
          <span className="text-blue-600">{payment_id}</span>
        </p>
      </section>
    </LayoutEcommerce>
  );
};
