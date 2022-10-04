export const getProducts = async () => {
  try {
    const response = await fetch(
      "http://localhost:3000/api/ecommerce/products"
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
