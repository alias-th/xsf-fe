"use client";

import apiClient from "@/lib/axios";
import { isAxiosError } from "axios";
import * as Types from "@/types/index";

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

const getProducts = async (query: {
  page?: number;
  limit?: number;
  sortOrder?: string;
  sortBy?: string;
  search?: string;
}) => {
  try {
    const res = await apiClient.get<{ data: Types.Product[] }>("/products", {
      params: query,
    });
    return { data: res.data.data };
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

const getProductDetail = async ({ id }: { id: string }) => {
  try {
    const res = await apiClient.get<Types.Product>("/products/" + id);
    return { data: res.data };
  } catch (error) {
    if (isAxiosError(error)) {
      console.log(
        "Axios error fetching product detail:",
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

export { createProduct, getProducts, getProductDetail };
