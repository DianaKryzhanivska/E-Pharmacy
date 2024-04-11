import { createSlice } from "@reduxjs/toolkit";
import { registerThunk } from "./operations";

const initialState = {
  user: {
    name: "",
    email: "",
    phone: "",
  },
  token: "",
  isLoggedIn: false,
  isLoading: false,
  isRefresh: false,
  error: null,
};

export const slice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.token = payload.token;
        state.user = payload.user;
      })
      .addCase(registerThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const authReducer = slice.reducer;
