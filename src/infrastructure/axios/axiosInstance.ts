import * as axios from "axios";
import { AuthStorage } from "../localStorage/authStorage.ts";

const apiBaseUrl = import.meta.env.BASE_URL;

export const axiosInstance = axios.create({
  baseURL: apiBaseUrl, // Get the base URL from the .env file
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = AuthStorage.getToken();

    if (token) {
      config.headers["Authorization"] = `Bearer ${token.accessToken}`;
    }

    return config;
  },
  (error) => {
    if (error.response.status === 401) {
      // Handle unauthorized error (e.g., redirect to login page)
      console.error("Unauthorized access - redirecting to login");
      // You can use history.push('/login') if using react-router
    } else if (error.response.status === 403) {
      // Handle forbidden error (e.g., show access denied message)
      console.error("Access denied - showing error message");
    } else {
      // Handle other errors
      console.error("An error occurred:", error.message);
    }

    return Promise.reject(error);
  },
);
