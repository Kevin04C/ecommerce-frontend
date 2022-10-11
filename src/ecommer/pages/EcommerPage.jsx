import { ProductList } from "../components/ProductList";
import { LayoutEcommerce } from "../layout/LayoutEcommerce";

export const EcommerPage = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.search);
  }

  return (
    <LayoutEcommerce>
      <form 
        className="w-full mb-5 flex item-center rounded-xl shadow-sm md:w-3/6 mx-auto"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="¡Busca tu bebida perfecta!"
          className="w-full border outline-none h-12 p-3 focus:border-red-500 transition-all"
          name="search"
          autoComplete="off"
        />
        <button 
          className="bg-red-500 h-12"
          type="submit"
        >
          <i className="fa-solid fa-beer-mug-empty text-white px-8"></i>
        </button>
      </form>

      <ProductList />
    </LayoutEcommerce>
  );
};
