import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Button } from "../../auth/components/Button";
import { capitalize } from "../helpers/capitalize";
import { formatMoney } from "../helpers/fomartMoney";
import { LayoutEcommerce } from "../layout/LayoutEcommerce";

export const ProductPage = () => {
  const { products } = useSelector((state) => state.ecommerce);
  const { id } = useParams();

  const product = products.find(
    (product) => product.idProductos === Number(id)
  );
  console.log(product);

  const haldleAddCart = (e) => {
    e.preventDefault();
    console.log("click")
  }

  return (
    <LayoutEcommerce>
      <section className="md:flex items-start gap-10">
        <picture className="basis-[40%] bg-white w-full rounded-3xl overflow-hidden">
          <img
            className="w-full h-full"
            src={product.imagenProducto}
          />
        </picture>
        <div className="basis-[60%] mt-5 p-4">
          <header className="mb-3">
            <h2 className="font-black text-4xl text-slate-700 mb-2">
              LAPTOP LENOVO CELERON N4020 4GB SSD 128GB 14" FHD WIN 10 IDEAPAD 1
              14IGL05
            </h2>

            <span className="text-slate-500 text-xl block">
              <b>Marca: </b>Intel
            </span>
          </header>

          <p className="text-slate-800 text-lg mb-5 leading-8">
            Laptop Nueva Lenovo V15- 15.6'' AMD Athlon 2.40 Ghz. 12GB RAM DDR4
            HDD 1TB + SSD 256 M.2 Año 2022 Procesador: AMD Athlon™ Gold 3150U /
            2.40 GHz hasta 3.30 GHz, caché 4M Memoria ram: 12GB DDR4
            Almacenamiento: 1TB HDD + SSD 256GB M.2 Pantalla: 15,6" HD
            (1366x768) TN 220nits antirreflejo Video: Gráficos AMD Radeon
            integrados / 2GB de video dedicado AMD Radeon WiFi 802.11ac,
            Bluetooth® 5.0 Cámara: Cámara 720p Teclado numérico en Español
            Puertos: USB 2.0, 2 x USB 3.1 Gen 1, HDMI 1.4b, Jack combo
            auriculares/micro Sistema operativo W10 Contenido del producto: -
            Caja. - Laptop - Batería - Cargador Ac - Manual de seguridad y
            garantía - Mouse óptico USB
          </p>

          <span className="text-4xl font-bold text-slate-800">
            {formatMoney(product.precioUnitario)}
          </span>

          <form 
            className="md:flex gap-5"
            onClick={haldleAddCart}
          >
            <select className="md:basis-[20%] w-full mb-3 p-3 text-center rounded outline-none border">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
            <button 
              className="md:basis[80%] w-full bg-blue-500 text-xl rounded-md text-white hover:bg-blue-700 transition-all"
              type="submit"
            >
              AGREGAR AL CARRITO
            </button>
          </form>
        </div>
      </section>
    </LayoutEcommerce>
  );
};
