export const registerUser = async (data) => {
  data.idRol = "1";
  try {
    const result = await fetch("http://localhost:3000/api/auth/crearUsuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

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
    const result = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
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

export const generateNewToken = async (token) => {
  try {
    const response = await fetch("http://localhost:3000/api/renew", {
      headers: {
        "x-token": token,
      },
    });

    const dataUser = await response.json();
    return {
      ok: true,
      ...dataUser,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
    };
  }
};
