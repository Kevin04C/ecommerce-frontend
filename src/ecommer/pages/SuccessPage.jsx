import { LayoutEcommerce } from "../layout/LayoutEcommerce";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Spinner } from "../../auth/components/Spinner";
import { generateTotal } from "../helpers/operationsCart";
import { buy, deleteCart } from "../helpers/helpersEcommerce";
import toast from "react-hot-toast";

export const SuccessPage = () => {
  const [completedOrder, setCompleteOrder] = useState({
    isLoading: true,
    isError: false,
  });
  const { isError, isLoading } = completedOrder;
  const { id } = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state.ecommerce);
  const { search } = useLocation();
  const { payment_id, status } = queryString.parse(search);

  const thereIsError = isError;

  useEffect(() => {
    if (!!id && status === "approved" && cart.length > 0) {
      const products = [];

      for (const product of cart) {
        const data = {
          idVenta: null,
          cantidad: product.cantidadCarrito,
          idProductos: product.idProductos,
          totalDetalle: Number(product.precioUnitario),
        };
        products.push(data);
      }
      const generatePucharse = async () => {
        const res = await buy(id, {
          products,
          totalVenta: generateTotal(cart),
        });
        setCompleteOrder({ isError: false, isLoading: false });
        if (!res.ok)
          return setCompleteOrder({ isError: true, isLoading: false });
        deleteCart(id);
      };
      generatePucharse();
    }
  }, [id, cart]);

  if (status === "approved") {
    return (
      <LayoutEcommerce>
        {isLoading ? (
          <Spinner />
        ) : (
          <section className="text-center md:w-2/4 mx-auto my-10">
            <div className={`${!thereIsError ? "" : "hidden"}`}>
              <i className="fa-solid fa-check text-green-500 text-6xl md:text-8xl"></i>
              <h1 className="text-4xl md:text-7xl text-slate-900 font-bold mb-7">
                Gracias por tu compra
              </h1>
              <p className="text-xl md:text-2xl font-semibold text-slate-500">
                Tu compra se realizó con exito, tu ID de pago es:{" "}
                <span className="text-blue-600">{payment_id}</span>
              </p>
            </div>

            <h1
              className={`font-bold text-center text-4xl text-red-500 ${
                thereIsError ? "" : "hidden"
              }`}
            >
              Ups, hubo un error en la compra
            </h1>
          </section>
        )}
      </LayoutEcommerce>
    );
  }

  return (
    <LayoutEcommerce className="my-10">
      <h1 className="font-bold text-center text-4xl text-red-500">
        Ups, hubo un error
      </h1>
    </LayoutEcommerce>
  );
};
