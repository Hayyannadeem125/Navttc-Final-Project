import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Product_slice.js";

const store = configureStore({
  reducer: {
    products: productReducer,
  },
});
export default store;