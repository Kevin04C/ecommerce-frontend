import React, { useEffect, useState } from "react";
import { LayoutEcommerce } from "../layout/LayoutEcommerce";
import { FormSearch } from "./FormSearch";
import QueryString from "query-string";
import { useLocation } from "react-router-dom";
import { Spinner } from "../../auth/components/Spinner";
import { searchProductBD } from "../helpers/helpersEcommerce";
import { Product } from "./Product";
import { ProductList } from "./ProductList";

export const SearchPage = () => {
  const [product, setProduct] = useState({
    isLoading: true,
    data: [],
    isError: false,
  });
  const { search } = useLocation();
  const { q = "" } = QueryString.parse(search);

  const { isLoading, data: products, isError } = product;

  useEffect(() => {
    setProduct({
      isLoading: true,
      data: [],
      isError: false,
    });

    const getSearchProducts = async () => {
      try {
        const response = await searchProductBD(q);
        setProduct({
          isLoading: false,
          data: response.search,
          isError: false,
        });
      } catch (err) {
        setProduct({
          isLoading: false,
          data: [],
          isError: true,
        });
      }
    };

    getSearchProducts();
  }, [search]);

  if (isLoading) {
    return (
      <LayoutEcommerce>
        <Spinner />
      </LayoutEcommerce>
    );
  }

  return (
    <LayoutEcommerce className="my-10">
      <FormSearch search={q}/>
      <p className="text-2xl font-bold mb-8 text-slate-600">
        Resultados con <span className="text-red-500 font-black">{q}</span>
      </p>
      {
        products.length <= 0 
        ? (
          <div className="md:w-2/4 mx-auto text-center">
            <i className="fa-solid fa-question text-5xl text-red-500"></i>
            <h3 className="text-2xl md:text-3xl font-black text-center text-slate-900">No se encontraron productos con lo que buscastes</h3>
          </div>
        )
        : (
          <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {products.map((product) => (
                <Product key={crypto.randomUUID()} product={product} />
              ))}
          </section>
        )
      }
    </LayoutEcommerce>
  );
};
