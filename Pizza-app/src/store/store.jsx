import { configureStore } from "@reduxjs/toolkit";
import cartReducur from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducur,
  },
});
export default store;
