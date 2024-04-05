import axios from "axios";

const BASE_URL = "http://localhost:3020/api";

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const setToken = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  instance.defaults.headers.common.Authorization = "";
};

export default instance;
