import { createSlice } from "@reduxjs/toolkit";
import {
  getAllStores,
  getCustomerReviews,
  getNearestStores,
  getProductById,
  getSearchProducts,
} from "./operations";

const initialState = {
  stores: [],
  nearestStores: [],
  reviews: [],
  products: [],
  product: null,
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
        state.nearestStores = payload;
      })
      .addCase(getNearestStores.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(getNearestStores.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(getAllStores.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.stores = payload;
      })
      .addCase(getAllStores.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(getAllStores.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(getSearchProducts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.products = payload;
      })
      .addCase(getSearchProducts.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(getSearchProducts.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(getProductById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.product = payload;
      })
      .addCase(getProductById.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(getProductById.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const pharmacyReducer = slice.reducer;
