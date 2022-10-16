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
    const response = await fetch(
      `${import.meta.env.VITE_API_ECOMMERCE}/carrito/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const json = await response.json();
    console.log(json);
    return json;
  } catch (err) {
    const message = err.message;
    return {
      ok: false,
      message,
    };
  }
};

export const getCartUser = async (id) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_ECOMMERCE}/carrito/${id}`
    );
    const json = await response.json();

    return {
      ok: true,
      data: json,
    };
  } catch (err) {
    return {
      ok: false,
    };
  }
};

export const deleteProductCart = async (id) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_ECOMMERCE}/carrito/producto/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await response.json();
    return json;
  } catch (err) {
    return {
      ok: false,
    };
  }
};

export const updateProductCart = async (id, data) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_ECOMMERCE}/carrito/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const json = await response.json();
    return json;
  } catch (err) {
    return {
      ok: false,
    };
  }
};

export const updateDecrementProductCart = async (id, data) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_ECOMMERCE}/carrito/decrementar/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const json = await response.json();
    return json;
  } catch (err) {
    return {
      ok: false,
    };
  }
};

export const deleteCart = async (id) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_ECOMMERCE}/carrito/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await response.json();
    return json;
  } catch (err) {
    return {
      ok: false,
    };
  }
};
