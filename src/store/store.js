import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { ecommerceSlice } from "./ecommer/ecommerceSlice";

export default configureStore({
  reducer: {
    auth: authSlice.reducer,
    ecommerce: ecommerceSlice.reducer,
  },
});
