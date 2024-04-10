import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../instance";

export const getCustomerReviews = createAsyncThunk(
  "reviews",
  async (body, { rejectWithValue }) => {
    try {
      const { limit = 3 } = body;
      const response = await instance.get(`/customer-reviews?limit=${limit}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getNearestStores = createAsyncThunk(
  "nearest-stores",
  async (body, { rejectWithValue }) => {
    try {
      const { limit = 6 } = body;
      const response = await instance.get(`/stores/nearest?limit=${limit}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getAllStores = createAsyncThunk(
  "all-stores",
  async (body, { rejectWithValue }) => {
    try {
      const { limit = "" } = body;
      const response = await instance.get(`/stores?limit=${limit}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getSearchProducts = createAsyncThunk(
  "products",
  async (body, { rejectWithValue }) => {
    try {
      const { limit = "" } = body;
      const response = await instance.get(`/products?&limit=${limit}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getProductById = createAsyncThunk(
  "products/:id",
  async (id, { rejectWithValue }) => {
    try {
      const response = await instance.get(`/products/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
