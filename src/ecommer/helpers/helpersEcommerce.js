export const getProducts = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_ECOMMERCE}/api/ecommerce/products`
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
      `${import.meta.env.VITE_API_ECOMMERCE}/api/ecommerce/product/${id}`
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
      `${import.meta.env.VITE_API_ECOMMERCE}/api/carrito/`,
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
      `${import.meta.env.VITE_API_ECOMMERCE}/api/carrito/${id}`
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
      `${import.meta.env.VITE_API_ECOMMERCE}/api/carrito/producto/${id}`,
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
      `${import.meta.env.VITE_API_ECOMMERCE}/api/carrito/${id}`,
      {
        method: "PUT",
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
    return {
      ok: false,
    };
  }
};

export const updateDecrementProductCart = async (id, data) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_ECOMMERCE}/api/carrito/decrementar/${id}`,
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
      `${import.meta.env.VITE_API_ECOMMERCE}/api/carrito/${id}`,
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

export const paymentCart = async (idUser) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_ECOMMERCE}/api/payment/${idUser},`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return await response.json();
  } catch (err) {
    return {
      ok: false,
    };
  }
};

export const buy = async (id, data) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_ECOMMERCE}/api/ventas/${id}`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
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

export const searchProductBD = async (query) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_ECOMMERCE}/api/ecommerce/search/${query}`,
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    const json = await response.json();
    return json;
  } catch (err) {
    throw err;
  }
};

export const getOrders = async (id) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_ECOMMERCE}/api/ordersHistory/${id}`,
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    return await response.json();
  } catch (err) {
    return { ok: false };
  }
};
