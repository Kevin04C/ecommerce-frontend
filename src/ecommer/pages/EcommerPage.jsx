import { useSelector } from "react-redux";
import { FormSearch } from "../components/FormSearch";
import { ProductList } from "../components/ProductList";
import { LayoutEcommerce } from "../layout/LayoutEcommerce";

export const EcommerPage = () => {
  const { products = [] } = useSelector((state) => state.ecommerce);

  return (
    <LayoutEcommerce>
      <FormSearch />

      <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-12 text-gray-800">
        Todos nuestros <span className="text-red-500">LICORES</span> disponibles
      </h2>
      <ProductList products={products} />
    </LayoutEcommerce>
  );
};
