import { CartList } from "../components/CartList";
import { LayoutEcommerce } from "../layout/LayoutEcommerce";

export const CartPage = () => {

  return (
    <LayoutEcommerce className="pb-12">
      <CartList />
    </LayoutEcommerce>
  );
};
