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

export const getProduct = async (id) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_ECOMMERCE}/ecommerce/product/${id}`
    );

    const product = await response.json();

    if (!product.ok) {
      throw new Error("Producto no encontrado");
    }

    return {
      ok: true,
      ...product,
    };
  } catch (err) {
    return {
      ok: false,
    };
  }
};

export const setProductCart = async (data) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_ECOMMERCE}/carrito/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    
    const json = await response.json();
    console.log(json);
    return {
      ok: true,
      ...json,
    };
  } catch (err) {
    console.log(err);
    return {
      ok: false,
    };
  }
};
