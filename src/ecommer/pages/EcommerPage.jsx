import { useEffect } from "react";
import { useSelector } from "react-redux";
import { ProductList } from "../components/ProductList";
import { LayoutEcommerce } from "../layout/LayoutEcommerce";

export const EcommerPage = () => {
  const { cart } = useSelector((state) => state.ecommerce);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  return (
    <LayoutEcommerce>
      <ProductList />
    </LayoutEcommerce>
  );
};
