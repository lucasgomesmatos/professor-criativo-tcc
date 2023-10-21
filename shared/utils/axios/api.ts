import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";
import { Environment } from "./constants/environment";

export const httpClient = axios.create({
  baseURL: Environment.URL_BASE,
  headers: {
    options: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  },
});

httpClient.interceptors.request.use(
  async (config) => {
    const token = Cookies.get("mundoprof.com.br");

    config.headers["Authorization"] = `Bearer ${token}`;

    return config;
  },
  (error: AxiosError) => {
    if (error.response?.status === 401 || error.response?.status === 403) {
      Cookies.remove("mundoprof.com.br");
    }
    return error;
  }
);
