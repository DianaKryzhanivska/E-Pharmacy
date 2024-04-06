import { createSlice } from "@reduxjs/toolkit";
import { getCustomerReviews, getNearestStores } from "./operations";

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
      })
      .addCase(getNearestStores.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.nearestStores = payload;
      })
      .addCase(getNearestStores.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(getNearestStores.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const pharmacyReducer = slice.reducer;
