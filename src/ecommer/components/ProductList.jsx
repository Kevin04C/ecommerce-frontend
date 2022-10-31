import { useSelector } from "react-redux";
import { Spinner } from "../../auth/components/Spinner";
import { Product } from "./Product";

export const ProductList = ({ products }) => {
  const { isLoading } = useSelector((state) => state.ecommerce);

  if (isLoading) {
    return (
      <div className="mx-auto text-center">
        <Spinner />
        <p className="text-sm font-semibold text-slate-900">
          Espera un momento
        </p>
      </div>
    );
  }

  return (
    <div className="pb-12">
      {products.length <= 0 ? (
        <div>
          <p className="text-2xl font-semibold text-slate-900">
            No se encontraron productos
          </p>
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
