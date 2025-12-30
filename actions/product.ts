"use client";

import apiClient from "@/lib/axios";
import { isAxiosError } from "axios";

type Response = {
  status: number;
  data?: any;
  error?: string;
};
const createProduct = async (form: FormData) => {
  try {
    const res = await apiClient.post<Response>("/products", form, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return { status: res.status, data: res.data };
  } catch (error) {
    if (isAxiosError(error)) {
      console.log(
        "Axios error creating product:",
        error.response?.data || error.message
      );
      return {
        status: error.response?.status,
        error: error.response?.data.error || error.message,
      };
    }
    return { status: 500, error: "Unknown error occurred" };
  }
};

export { createProduct };
