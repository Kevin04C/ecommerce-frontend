import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { formatMoney } from "../helpers/fomartMoney";
import { LayoutEcommerce } from "../layout/LayoutEcommerce";
import { Button } from "../../auth/components/Button";
import { capitalize } from "../helpers/capitalize";
import { useEffect, useRef, useState } from "react";
import { getProduct, setProductCart } from "../helpers/helpersEcommerce";
import { Spinner } from "../../auth/components/Spinner";
import toast from "react-hot-toast";
import { SavingSpinner } from "../components/SavingSpinner";
import { finishSaving, startSaving } from "../../store/ecommer/ecommerceSlice";

export const ProductPage = () => {
  const [product, setProduct] = useState({
    isError: false,
    isLoading: true,
    data: null,
  });
  const { data, isLoading, isError } = product;
  const {
    nombreProducto,
    descripcion,
    precioUnitario,
    imagenProducto,
    nombreCategoria,
    nombreMarca,
  } = data || {};

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { id: idUsuario } = useSelector((state) => state.auth);
  const { isSaving } = useSelector((state) => state.ecommerce);
  const selectRef = useRef();

  const haldleAddCart = async (e) => {
    e.preventDefault();
    if(!idUsuario) return navigate("/auth/login");

    const quantity = Number(selectRef.current.value);
    dispatch(startSaving());
    
    const res = await setProductCart({
      idProductos: id,
      idUsuario: idUsuario,
      cantidadCarrito: quantity,
    });
    
    if(!res.ok) {
      dispatch(finishSaving());
      return toast.error(res?.message || "Hubo un error")
    }
    toast.success(res.message);
    dispatch(finishSaving());
  };

  useEffect(() => {
    getProduct(id).then((res) => {
      if (!res.ok) {
        return setProduct({
          data: null,
          isLoading: false,
          isError: true,
        });
      }
      setProduct({
        data: res.result,
        isLoading: false,
        isError: false,
      });
    });
  }, []);

  if (isLoading) {
    return (
      <LayoutEcommerce>
        <Spinner />
      </LayoutEcommerce>
    );
  }

  return (
    <LayoutEcommerce>
      {isError ? (
        <p className="text-4xl text-center font-bold -mt-20">
          {" "}
          <b className="text-red-500 block">¡Ups!</b> producto no encontrado
        </p>
      ) : (
        <section className="md:flex items-start gap-10 my-10">
          <picture className="basis-[30%] bg-white w-full rounded-3xl overflow-hidden">
            <img className="w-full h-full" src={imagenProducto} />
          </picture>
          <div className="basis-[70%] p-4">
            <header className="mb-3">
              <h2 className="font-black text-3xl md:text-4xl text-slate-800 mb-2">
                {nombreProducto}
              </h2>
              <div className="md:flex gap-4">
                <span className="text-slate-500 text-xl block">
                  <b>Categoría: </b>
                  {capitalize(nombreCategoria)}
                </span>
                <span className="text-slate-500 text-xl block">
                  <b>Marca: </b>
                  {capitalize(nombreMarca)}
                </span>
              </div>
            </header>

            <p className="text-slate-600 text-lg mb-5">
              {capitalize(descripcion)}
            </p>

            <div className="flex items-start gap-10">
              <p className="font-black text-slate-800 text-3xl">
                Precio:
                <span className="block text-red-500 text-2xl mt-2">
                  {formatMoney(precioUnitario)}
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
               <button 
                type="submit"
                className={`bg-blue-500 rounded text-white px-5 py-2 shadow-sm font-bold w-2/4 mx-auto mt-2 ${isSaving && 'grayscale'} `}
                disabled={isSaving}
              >
                {
                  isSaving 
                  ? <SavingSpinner />
                  : "Agregar al carrito"
                }
               </button>
            </form>
          </div>
        </section>
      )}
    </LayoutEcommerce>
  );
};
