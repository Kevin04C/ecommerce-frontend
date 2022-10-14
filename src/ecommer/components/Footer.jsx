import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 py-10">
      <div className="md:max-w-7xl mx-auto text-white">
        <div>
          <div className="md:grid grid-cols-3 mx-auto mb-8">
            <ul className="text-center mb-10 md:mb-0">
              <li className="text-xl font-semibold mb-6">INFORMACIÓN</li>
              <li className="text-sm text-gray-400 hover:underline cursor-pointer mb-2">
                ¿Qué es ecommerce?
              </li>
              <li className="text-sm text-gray-400 hover:underline cursor-pointer mb-2">
                Centro de ayuda en linea
              </li>
              <li className="text-sm text-gray-400 hover:underline cursor-pointer mb-2">
                Política de devolución de producto
              </li>
              <li className="text-sm text-gray-400 hover:underline cursor-pointer mb-2">
                Términos y condiciones
              </li>
            </ul>
            <ul className="text-center mb-10 md:mb-0">
              <li className="text-xl font-semibold mb-6">SOPORTE</li>
              <li className="text-sm text-gray-400 hover:underline cursor-pointer mb-2">
                Preguntas frecuentes
              </li>
              <li className="text-sm text-gray-400 hover:underline cursor-pointer mb-2">
                Centro de reclamos
              </li>
              <li className="text-sm text-gray-400 hover:underline cursor-pointer mb-2">
                Horario: 08:00hs - 17:00hs
              </li>
            </ul>
            <ul className="text-center mb-10 md:mb-0">
              <li className="text-xl font-semibold mb-6">CONTÁCTANOS</li>
              <li className="text-sm text-gray-400 hover:underline cursor-pointer flex items-center justify-center gap-2 mb-2">
                <span>
                  <i className="fa-solid fa-headset"></i>
                </span>
                <p>
                  Atención telefónica: <br /> +51 999 999 999
                </p>
              </li>
              <li className="text-sm text-gray-400 hover:underline cursor-pointer flex items-center justify-center gap-2 mb-2">
                <span>
                  <i className="fa-regular fa-clock"></i>
                </span>
                <p className="w-2/4">
                  De Lunes a Sábado en el horario de 08:00hs a 18:00hs y
                  Domingos de 08:00hs a 14:00hs
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center text-sm text-slate-300">
          <p>Proyecto ecommerce de <b>LICOR STORE</b></p>
          <p>&copy; Derechos reservados</p>
        </div>
      </div>
    </footer>
  );
};
