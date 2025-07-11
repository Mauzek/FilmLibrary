import axios from "axios";
import { env } from "@/config";

export const apiClient = axios.create({
  baseURL: env.apiUrl,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    "X-API-KEY": env.apiKey,
  },
});
