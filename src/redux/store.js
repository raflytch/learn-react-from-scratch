import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

console.log("On Create Store", store.getState());

store.subscribe(() => {
  console.log("Store changed", store.getState());
});

export default store;
