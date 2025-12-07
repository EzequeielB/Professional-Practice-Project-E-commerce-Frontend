import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: null,
  ownerId: null,
  loading: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      const cart = action.payload;
      state.cart = cart;
      state.ownerId = cart?.userId ?? cart?.usuario?.id ?? null;
    },
    clearCart: (state) => {
      state.cart = null;
      state.ownerId = null;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setCart, clearCart, setLoading, setError } = cartSlice.actions;
export default cartSlice.reducer;
