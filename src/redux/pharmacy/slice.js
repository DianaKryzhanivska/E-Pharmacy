import { createSlice } from "@reduxjs/toolkit";
import { getCustomerReviews } from "./operations";

const initialState = {
  stores: [],
  nearestStores: [],
  reviews: [],
  products: [],
  cart: [],
  isLoading: false,
  error: null,
};

export const slice = createSlice({
  name: "pharmacy",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCustomerReviews.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.reviews = payload;
      })
      .addCase(getCustomerReviews.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(getCustomerReviews.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const pharmacyReducer = slice.reducer;
