import { loginUser, registerUser } from "../../auth/helpers";
import { checkingCreditionals, login, logout } from "../auth/authSlice";

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

    dispatch(login(result));
    localStorage.setItem("token", result.token);
  };
};
