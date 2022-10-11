import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { formatMoney } from "../helpers/fomartMoney";
import { LayoutEcommerce } from "../layout/LayoutEcommerce";
import { Button } from "../../auth/components/Button";
import { capitalize } from "../helpers/capitalize";
import { useRef } from "react";
import { addProduct, incrementProduct, incrementProductByQuantity } from "../../store/ecommer/ecommerceSlice";
import toast from "react-hot-toast";

export const ProductPage = () => {
  const { products } = useSelector((state) => state.ecommerce);
  const { cart } = useSelector((state) => state.ecommerce);
  const { id } = useParams();
  const dispatch = useDispatch();
  const selectRef = useRef();

  const productFind = products.find(
    (product) => product.idProductos === Number(id)
  );
  const productFindCart = cart.find(
    (product) => product.idProductos === Number(id)
  );

  const haldleAddCart = (e) => {
    e.preventDefault();
    const quantity = selectRef.current.value;
    const productExists = cart.find(
      (p) => p.idProductos === productFind.idProductos
    );
    if (productExists) {
      if (productFindCart.cantidad + Number(quantity) > productFind.stock) {
        return toast.error(<b>Stock Insuficiente</b>)
      }else {
        dispatch(incrementProductByQuantity({id: productFind.idProductos, quantity: quantity}))
        toast.success("Producto agregado al carrito");
      }
    }else {
      dispatch(addProduct({...productFind, cantidad: Number(quantity)}))
      toast.success("Producto agregado al carrito");
    }
  };

  return (
    <LayoutEcommerce>
      <section className="md:flex items-start gap-10 mb-10 md:mb-0">
        <picture className="basis-[30%] bg-white w-full rounded-3xl overflow-hidden">
          <img className="w-full h-full" src={productFind.imagenProducto} />
        </picture>
        <div className="basis-[70%] mt-5 p-4">
          <header className="mb-3">
            <h2 className="font-black text-3xl md:text-4xl text-slate-800 mb-2">
              {productFind.nombreProducto}
            </h2>

            <span className="text-slate-500 text-xl block">
              <b>CATEGORIA: </b>xxx
            </span>
          </header>

          <p className="text-slate-600 text-lg mb-5">
            {capitalize(productFind.descripcion)}
          </p>

          <div className="flex items-start gap-10">
            <p className="font-black text-slate-800 text-3xl">
              Precio:
              <span className="block text-red-500 text-2xl mt-2">
                {formatMoney(productFind.precioUnitario)}
              </span>
            </p>
            <div className="mt-2">
              <span className="block font-bold mb-2 text-slate-600 text-center">
                Cantidad:
              </span>
              <select
                className="grow md:grow-0 py-2 text-center w-40 border-slate-400 rounded border-2 outline-none"
                ref={selectRef}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
            </div>
          </div>

          <form className="mt-5" onClick={haldleAddCart}>
            <Button className="md:w-2/4 w-full mx-auto">
              Agregar al carrito
            </Button>
          </form>
        </div>
      </section>
    </LayoutEcommerce>
  );
};
