import { useEffect } from "react";
import { useSelector } from "react-redux";
import { CartList } from "../components/CartList";
import { LayoutEcommerce } from "../layout/LayoutEcommerce";

export const CartPage = () => {
  const { cart } = useSelector((state) => state.ecommerce);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  return (
    <LayoutEcommerce className="pb-12">
        <CartList />
    </LayoutEcommerce>
  );
};
