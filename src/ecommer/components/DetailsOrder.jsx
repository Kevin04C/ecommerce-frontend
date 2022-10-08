import { useMemo } from "react";
import { useSelector } from "react-redux"
import { formatMoney } from "../helpers/fomartMoney";
import { generateIGV, generateTotal } from "../helpers/operationsCart";

export const DetailsOrder = () => {

  const { cart } = useSelector(state => state.ecommerce);

  const totalPriceOrder = useMemo(() => generateTotal(cart), [cart]);
  const totalIGVPriceOrder = useMemo(() => generateIGV(totalPriceOrder), [cart]);

  return (
    <div className="sticky left-0 top-5">
      <h3 className="text-2xl font-extrabold text-gray-800 text-center mb-2 +">RESUMEN DE TU COMPRA</h3>
      <hr />
      <div className="bg-white w-full rounded-lg px-4 py-8 mt-3">
        <ul>
          <li className="flex justify-between mb-4">
            <p className="font-medium text-gray-600">Subtotal: </p>
            <span className="font-bold">{formatMoney(totalPriceOrder - totalIGVPriceOrder)}</span>
          </li>
          <li className="flex justify-between">
            <p className="font-medium text-gray-600">IGV: </p>
            <span className="font-bold">{formatMoney(totalIGVPriceOrder)}</span>
          </li>

          <p className="font-black text-2xl mt-10 flex justify-between">
            Total:
            <span>{formatMoney(totalPriceOrder)}</span>
          </p>
        </ul>
        <button className="block w-full bg-blue-500 rounded-lg text-white shadow-sm mt-4 p-2 font-bold text-xl hover:bg-blue-700 transition-all" >
          Procesar Compra
        </button>
      </div>
    </div>
  )
}
