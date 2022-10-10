import React from "react";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import WhatsappImg from "../../assets/whatsapp.svg";

export const LayoutEcommerce = ({ children, className }) => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <NavBar />
      <main
        className={`md:max-w-7xl mx-auto px-3 mt-8 min-h-[80vh] ${className}`}
      >
        {children}
        <picture className="fixed right-4 bottom-4  z-20">
          <img
            src={WhatsappImg}
            alt="Logo whatsapp"
            className="w-14 h-14 md:w-16 md:h-16 rounded-[50%] cursor-pointer hover:scale-110 transition-all"
          />
        </picture>
      </main>
      <Footer />
    </div>
  );
};
