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
      const product = state.cart.find((p) => p.idProductos === payload);
      product.cantidadCarrito++;
    },
    incrementProductByQuantity: (state, { payload }) => {
      const product = state.cart.find((p) => p.idProductos === payload.id);
      product.cantidadCarrito += Number(payload.quantity);
    },
    decrementProduct: (state, { payload }) => {
      const product = state.cart.find((p) => p.idProductos === payload);
      product.cantidadCarrito--;
    },
    deleteProduct: (state, { payload }) => {
      state.cart = state.cart.filter((p) => p.idProductos !== payload);
    },
    clearCart: (state) => {
      state.cart = [];
    },
    finishSaving: (state) => {
      state.isSaving = false;
    },
    finishLoading: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  addProduct,
  clearCart,
  decrementProduct,
  deleteProduct,
  finishLoading,
  finishSaving,
  incrementProduct,
  incrementProductByQuantity,
  setCart,
  setErrorMessage,
  setProdroducts,
  startLoading,
  startSaving,
} = ecommerceSlice.actions;
