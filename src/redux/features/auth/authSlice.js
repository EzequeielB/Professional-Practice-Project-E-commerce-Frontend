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
    loginAction: (state, action) => {
      const token = action.payload;
      state.token=token
      state.decode = jwtDecode(token);
    },
    logoutAction: (state) => {
      state.token = null;
      state.decode = null;
    },
  },
});

export const { loginAction, logoutAction } = userAuthSlice.actions;
export default userAuthSlice.reducer;
