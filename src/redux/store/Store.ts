import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../reducers/ProductsSlice";
import cartSlice from "../reducers/CartSlice";

export const Store = configureStore({
  reducer: {
    productsSlice,
    cartSlice,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
