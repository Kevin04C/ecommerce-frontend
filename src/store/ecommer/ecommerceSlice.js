import { createSlice } from "@reduxjs/toolkit";

export const ecommerceSlice = createSlice({
  name: "ecommer",
  initialState: {
    isSaving: false,
    isLoading: false,
    products: [],
    cart: [],
    completedOrders: [],

    errorMessage: null,
  },
  reducers: {
    startSaving: (state) => {
      state.isSaving = true;
    },
    startLoading: (state) => {
      state.isLoading = true;
    },
    setErrorMessage: (state, { payload }) => {
      state.errorMessage = payload.message;
    },
    setProdroducts: (state, { payload }) => {
      state.isLoading = false;
      state.products.push(...payload.products);
    },
  },
});

export const { startSaving, startLoading, setErrorMessage, setProdroducts } =
  ecommerceSlice.actions;
