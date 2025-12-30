"use client";

import apiClient from "@/lib/axios";
import { Category, Pagination } from "@/types";
import { isAxiosError } from "axios";

type Response = {
  status: number;
  data?: { data: Category[]; pagination: Pagination };
  error?: string;
};
const getCategory = async (query: { page?: number; limit?: number }) => {
  try {
    const res = await apiClient.get<Response>("/categories", {
      params: query,
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

export { getCategory };
