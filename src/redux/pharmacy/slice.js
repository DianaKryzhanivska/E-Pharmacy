import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  getAllStores,
  getCartItems,
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
      .addCase(getNearestStores.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.nearestStores = payload;
      })
      .addCase(getAllStores.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.stores = payload;
      })
      .addCase(getSearchProducts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.products = payload;
      })
      .addCase(getProductById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.product = payload;
      })
      .addCase(getCartItems.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.cart = payload.cartProducts;
      })
      .addMatcher(
        isAnyOf(
          getCustomerReviews.pending,
          getNearestStores.pending,
          getAllStores.pending,
          getSearchProducts.pending,
          getProductById.pending,
          getCartItems.pending
        ),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          getCustomerReviews.rejected,
          getNearestStores.rejected,
          getAllStores.rejected,
          getSearchProducts.rejected,
          getProductById.rejected,
          getCartItems.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const pharmacyReducer = slice.reducer;
