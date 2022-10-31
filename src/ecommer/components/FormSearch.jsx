import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

export const FormSearch = ({search = ""}) => {
  const navigate = useNavigate();
  const [searchProduct, setSearchProduct] = useState(search);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchProduct.trim().length <= 1) return;

    const search = searchProduct.toLowerCase().trim();
    navigate(`/search/?q=${search}`);
  };

  const handleInputChage = (e) => {
    const product = e.target.value;
    setSearchProduct(product);
  };

  return (
    <form
      className="w-full mb-5 flex item-center rounded-xl shadow-sm md:w-3/6 mx-auto"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="¡Busca tu bebida perfecta!"
        className="w-full border outline-none h-12 p-3 focus:border-red-500 transition-all text-slate-600"
        name="searchProduct"
        autoComplete="off"
        onChange={handleInputChage}
        value={searchProduct}
      />
      <button className="bg-red-500 h-12" type="submit">
        <i className="fa-solid fa-beer-mug-empty text-white px-8"></i>
      </button>
    </form>
  );
};
