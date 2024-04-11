import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import instance, { setToken } from "../instance";

export const registerThunk = createAsyncThunk(
  "register",
  async (body, { rejectWithValue }) => {
    try {
      const response = await instance.post("/user/register", body);
      setToken(response.data.token);
      localStorage.setItem("refreshToken", response.data.token);
      localStorage.setItem("accessToken", response.data.token);
      return response.data;
    } catch (error) {
      if (error.response) {
        switch (error.response.status) {
          case 400:
            toast.error("Validation error: please check your data");
            break;
          case 409:
            toast.error("Error: User with this email already exists");
            break;
          default:
            break;
        }
      }
      return rejectWithValue(error.message);
    }
  }
);
