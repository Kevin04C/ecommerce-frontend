import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLoadingProducts } from "../../store/ecommer/thunks";
import { ProductList } from "../components/ProductList";
import { LayoutEcommerce } from "../layout/LayoutEcommerce";

export const EcommerPage = () => {
  const dispatch = useDispatch();
  const { products = [] } = useSelector((state) => state.ecommerce);

  useEffect(() => {
    if (products.length > 0) return;
    dispatch(startLoadingProducts());
  }, []);

  return (
    <LayoutEcommerce>
      <ProductList />
    </LayoutEcommerce>
  );
};
