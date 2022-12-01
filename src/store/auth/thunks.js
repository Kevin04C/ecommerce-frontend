import toast from "react-hot-toast";
import {
  loginUser,
  registerUser,
  updateUser,
} from "../../auth/helpers";
import {
  checkingCreditionals,
  clearErrorUpdatePhoto,
  login,
  logout,
  setErrorUpdatePhoto,
  updadingPhotoUser,
  updateDataUser,
  updatePhotoUser,
} from "../auth/authSlice";

export const startRegisterUser = (data) => {
  return async (dispatch) => {
    dispatch(checkingCreditionals());

    const result = await registerUser(data);

    if (!result.ok) return dispatch(logout(result));
    dispatch(login(result));
    localStorage.setItem("token", result.token);
  };
};

export const startLoginUser = (data) => {
  return async (dispatch) => {
    dispatch(checkingCreditionals());

    const result = await loginUser(data);

    if (!result.ok) return dispatch(logout(result));

    localStorage.setItem("token", result.token);
    dispatch(login(result))
  };
};

export const StartUpdateUser = (data) => {
  return async (dispatch, getState) => {
    const { id } = getState().auth;
    const token = localStorage.getItem("token");
    const result = await updateUser(data, id, token);

    if (!result.ok) return;

    dispatch(updateDataUser(result.user));
    localStorage.setItem("token", result.token);
    toast.success("Datos actualizado");
  };
};

export const startUpdatePhoto = (photo) => {
  return async (dispatch, getState) => {
    const { id } = getState().auth;

    const formData = new FormData();
    formData.append("photo", photo);

    dispatch(updadingPhotoUser());

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_ECOMMERCE}/api/auth/uploadPhoto/${id}`,
        {
          method: "PUT",
          body: formData,
        }
      );
      if(!response.ok) throw await response.json();
      
      const { secure_url } = await await response.json();
      dispatch(updatePhotoUser(secure_url));

    } catch (error) {
      dispatch(setErrorUpdatePhoto(error?.msg));

      setTimeout(() => {
        dispatch(clearErrorUpdatePhoto())
      }, 10);
    }
  };
};
