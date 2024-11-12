import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

// action

const addToCart = createAction("ADD_TO_CART");
const login = createAction("CREATE_SESSION_LOGIN");
const logout = createAction("CREATE_SESSION_LOGOUT");

// reducer

const cartReducer = createReducer([], (builder) => {
  builder.addCase(addToCart, (state, action) => {
    // Sama Saja Seperti ini
    // state.cart = [...state.cart, action.payload];
    state.push(action.payload);
  });
});

const authReducer = createReducer({ isAuthenticated: false }, (builder) => {
  builder.addCase(login, (state, action) => {
    state.isAuthenticated = true;
    state.user = action.payload;
  });
  builder.addCase(logout, (state, action) => {
    state.isAuthenticated = false;
    state.user = null;
  });
});

// Store

const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
  },
});

// Subscribe

console.log("On create store", store.getState());

store.subscribe(() => {
  console.log("Store changed", store.getState());
});

// Dispatch

store.dispatch(addToCart({ id: 1, quantity: 10 }));

store.dispatch(
  login({
    username: "John Doe",
    password: "password123",
    token: "ey23183e12usb12ge12veu21behb1u2ev1",
  })
);

store.dispatch(logout());
