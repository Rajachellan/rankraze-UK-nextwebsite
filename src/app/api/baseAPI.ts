import axios, { AxiosError } from "axios";
// Remove trailing slash from base URL if present
const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.rankraze.com"
export const baseApiInstance = axios.create({
  baseURL: baseURL.replace(/\/$/, ''),
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 second timeout
});

// Add response interceptor for better error handling
baseApiInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);