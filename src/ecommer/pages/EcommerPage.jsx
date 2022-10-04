import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { startLoadingProducts } from "../../store/ecommer/thunks";
import { ProductList } from "../components/ProductList";
import { LayoutEcommerce } from "../layout/LayoutEcommerce";

export const EcommerPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startLoadingProducts());
  }, []);

  return (
    <LayoutEcommerce>
      <ProductList />
    </LayoutEcommerce>
  );
};
