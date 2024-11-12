// Reducer

import { legacy_createStore } from "redux";

const cartReducer = (
  state = {
    cart: [
      {
        id: 1,
        quantity: 20,
      },
    ],
  },
  action
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};

// Store
const store = legacy_createStore(cartReducer);
console.log("On create store", store.getState());

// Subscribe
store.subscribe(() => {
  console.log("Store changed", store.getState());
});

// Dispatch
const actionOne = {
  type: "ADD_TO_CART",
  payload: {
    id: 2,
    quantity: 10,
  },
};
store.dispatch(actionOne);

const actionTwo = {
  type: "ADD_TO_CART",
  payload: {
    id: 3,
    quantity: 30,
  },
};
store.dispatch(actionTwo);
