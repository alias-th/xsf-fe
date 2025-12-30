import axios from "axios";

const apiVersion = "v1";
const url = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8081";

const apiClient = axios.create({
  baseURL: `${url}/api/${apiVersion}`,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
