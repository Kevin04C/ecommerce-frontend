import { getCartUser, getProducts } from "../../ecommer/helpers/helpersEcommerce";
import { setProdroducts, startLoading } from "./ecommerceSlice";

export const startLoadingProducts = () => {
  return async (dispatch) => {
    dispatch(startLoading());

    const result = await getProducts();

    if (!result.ok) return;
    dispatch(setProdroducts(result));
  };
};
