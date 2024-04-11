import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { loginThunk, registerThunk } from "./operations";

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
        state.user = payload.user;
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.user = payload.user;
      })
      .addMatcher(
        isAnyOf(registerThunk.pending, loginThunk.pending),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(registerThunk.rejected, loginThunk.rejected),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const authReducer = slice.reducer;
