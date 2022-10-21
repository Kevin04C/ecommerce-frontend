export const registerUser = async (data) => {
  data.idRol = "1";
  try {
    const result = await fetch(
      `${import.meta.env.VITE_API_ECOMMERCE}/auth/crearUsuario`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const dataUser = await result.json();
    return {
      ok: true,
      ...dataUser,
    };
  } catch (error) {
    const errorMessage = error.message;
    return {
      ok: false,
      errorMessage,
    };
  }
};

export const loginUser = async (data) => {
  try {
    const result = await fetch(
      `${import.meta.env.VITE_API_ECOMMERCE}/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const dataUser = await result.json();

    return {
      ok: true,
      ...dataUser,
    };
  } catch (error) {
    const errorMessage = error.message;
    return {
      ok: false,
      errorMessage,
    };
  }
};

export const updateUser = async (data, idUser) => {
  try {
    const result = await fetch(
      `${import.meta.env.VITE_API_ECOMMERCE}/auth/actualizarUsuario/${idUser}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const dataUser = await result.json();

    return {
      ok: true,
      ...dataUser,
    };
  } catch (err) {
    throw {
      ok: false,
      err,
    };
  }
};

export const generateNewToken = async (token) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_ECOMMERCE}/renew`,
      {
        headers: {
          "x-token": token,
        },
      }
    );
    if (!response.ok) throw response;

    const dataUser = await response.json();
    return {
      ok: true,
      ...dataUser,
    };
  } catch (error) {
    return {
      ok: false,
      ...error,
    };
  }
};
