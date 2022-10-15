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
      state.products = payload.products;
    },
    setCart: (state, { payload }) => {
      state.cart = payload;
    },
    addProduct: (state, { payload }) => {
      state.cart.push(payload);
    },
    incrementProduct: (state, { payload }) => {
      console.log(payload);
      const product = state.cart.find((p) => p.idProductos === payload);
      product.cantidad++;
    },
    incrementProductByQuantity: (state, { payload }) => {
      const product = state.cart.find((p) => p.idProductos === payload.id);
      product.cantidad += Number(payload.quantity);
    },
    decrementProduct: (state, { payload }) => {
      const product = state.cart.find((p) => p.idProductos === payload);
      product.cantidad--;
    },
    deleteProduct: (state, { payload }) => {
      state.cart = state.cart.filter((p) => p.idProductos !== payload);
    },
    clearCart: (state) => {
      state.cart = [];
    },
    finishSaving: (state) => {
      state.isSaving = false;
    }
  },
});

export const {
  startSaving,
  startLoading,
  setErrorMessage,
  setProdroducts,
  setCart,
  addProduct,
  clearCart,
  incrementProduct,
  decrementProduct,
  deleteProduct,
  incrementProductByQuantity,
  finishSaving
} = ecommerceSlice.actions;
