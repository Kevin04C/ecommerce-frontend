import React from "react";
import { NavBar } from "../components/NavBar";

export const LayoutEcommerce = ({children, className}) => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <NavBar />
      <main className={`md:max-w-7xl mx-auto px-3 mt-8 ${className}`}>
        {children}
      </main>
    </div>
  );
};
