import { loginUser, registerUser, updateUser } from "../../auth/helpers";
import { checkingCreditionals, login, logout, updateDataUser } from "../auth/authSlice";

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
    console.log(result);

    if (!result.ok) return dispatch(logout(result));

    dispatch(login(result));
    localStorage.setItem("token", result.token);
  };
};

export const StartUpdateUser = (data) => {
  return async (dispatch, getState) => {
    const { id } = getState().auth;

    const result = await updateUser(data, id);

    if (!result.ok) throw result;

    dispatch(updateDataUser(result));
  };
};
