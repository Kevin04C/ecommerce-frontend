import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "../../auth/components/Spinner";
import { setCart } from "../../store/ecommer/ecommerceSlice";
import { CartList } from "../components/CartList";
import { getCartUser } from "../helpers/helpersEcommerce";
import { LayoutEcommerce } from "../layout/LayoutEcommerce";

export const CartPage = () => {
  const { cart } = useSelector((state) => state.ecommerce);
  const { id } = useSelector((state) => state.auth);
  const [cartUser, setCartUser] = useState({isLoading: true,  error: false});
  const { isLoading } = cartUser;

  const dispatch = useDispatch();

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  useEffect(() => {
    const getData = async () => {
      const res = await getCartUser(id);
      if(!res.ok) return setCartUser({isLoading: false, error: true});
      setCartUser({isLoading: false, error: false});
      dispatch(setCart(res.data))
    }
    getData();
  }, [id])

  if(isLoading) {
    return (
      <LayoutEcommerce>
          <Spinner />
      </LayoutEcommerce>
    )
  }

  return (
    <LayoutEcommerce className="pb-12">
      <CartList />
    </LayoutEcommerce>
  );
};
