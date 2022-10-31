import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Spinner } from "../../auth/components/Spinner";
import { ProductOrder } from "../components/ProductOrder";
import { getOrders } from "../helpers/helpersEcommerce";
import { LayoutEcommerce } from "../layout/LayoutEcommerce";

export const OrdersPage = () => {
  const [orders, setOrders] = useState({
    isLoding: false,
    isError: false,
    data: [],
  });
  const { isLoding, isError, data } = orders;
  const { id } = useSelector((state) => state.auth);

  useEffect(() => {
    const getOrdersHitory = async () => {
      setOrders({
        isLoding: true,
        isError: false,
        data: [],
      });
      try {
        const res = await getOrders(id);
        console.log(res);
        setOrders({
          isLoding: false,
          isError: false,
          data: res.orders,
        });
      } catch (err) {
        setOrders({
          isLoding: false,
          isError: true,
          data: [],
        });
      }
    };
    getOrdersHitory();
  }, []);

  if (isLoding) {
    return (
      <LayoutEcommerce>
        <Spinner />
      </LayoutEcommerce>
    );
  }

  return (
    <LayoutEcommerce className="my-5">
      <section>
        <header className="mb-6">
          <h3 className="text-3xl font-bold mb-3">Tus compras</h3>
          <hr />
        </header>
        {
          isError 
          ? <p className="text-3xl text-center font-bold text-red-500">Ups, hubo un error</p>
          : (
            <section className="md:grid grid-cols-2 gap-4">
              {data.map((product) => (
                <ProductOrder key={crypto.randomUUID()} product={product} />
              ))}
            </section>  
          )
        }
      </section>
    </LayoutEcommerce>
  );
};
