import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
  },
});

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

console.log("On Create Slice", store.getState());

store.subscribe(() => {
  console.log("Store changed", store.getState());
});

store.dispatch(
  cartSlice.actions.addToCart({
    id: 1,
    quantity: 20,
  })
);

store.dispatch(
  cartSlice.actions.addToCart({
    id: 2,
    quantity: 30,
  })
);
