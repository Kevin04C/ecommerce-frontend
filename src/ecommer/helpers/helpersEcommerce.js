export const getProducts = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_ECOMMERCE}/ecommerce/products`
    );
    const products = await response.json();
    return {
      ok: true,
      products,
    };
  } catch (err) {
    return {
      ok: false,
    };
  }
};
