import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

const initialState = {
  token: null,
  decode: null,
};

export const userAuthSlice = createSlice({
  name: "authUser",
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
      state.decode = action.payload.jwtDecode(token);
    },
    logout: (state) => {
      state.token = null;
      state.decode = null;
    },
  },
});

export const { login, logout } = userAuthSlice.actions;
export default userAuthSlice.reducer;
