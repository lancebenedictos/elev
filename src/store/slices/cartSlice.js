import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const index = state.findIndex((e) => e.id === action.payload.id);
      if (index > 0) {
        state[index].qty += 1;
      } else {
        state.push({ ...action.payload, qty: 1 });
      }
    },
    removeItem: (state, action) => {
      state.filter((e) => e.id !== action.payload);
    },
    add: (state, action) => {
      state.map((e) => {
        if (action.payload.cartId === action.payload.cartId) {
          e.qty += 1;
        }
        return e;
      });
    },
    minus: (state, action) => {
      state.map((e) => {
        if (action.payload.cartId === action.payload.cartId) {
          e.qty -= 1;
        }
        return e;
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, removeItem, add, minus } = cartSlice.actions;

export default cartSlice.reducer;
