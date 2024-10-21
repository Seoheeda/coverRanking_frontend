import axios from "axios";

const BASE_URL = "http://13.125.199.14:8080";
const DEFAULT_TIMEOUT = 30000;

export const createClient = () => {
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: DEFAULT_TIMEOUT,
    withCredentials: true,
  });

  return axiosInstance;
};

export const httpClient = createClient();