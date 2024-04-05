import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../instance";

export const getCustomerReviews = createAsyncThunk(
  "reviews",
  async (body, { rejectWithValue }) => {
    try {
      const { limit = 3 } = body;
      const response = await instance.get(`/customer-reviews?limit=${limit}`);
      console.log(response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
