import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://localhost:8181/api";

export interface Brand {
  id: number;
  name: string;
}

export interface Category {
  id: number;
  name: string;
}

export interface Colors {
  id: number;
  name: string;
}

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  stock: string;
  price: string;
  brand: Brand;
  category: Category;
  colors: Colors[];
}

interface DataResponse {
  success: boolean;
  message: string;
  data?: Product[];
}

export interface CredentialsRequest {
  name: string;
  image: string;
  description: string;
  stock: number;
  price: number;
  colors: Colors[];
  brand: Brand;
  category: Category;
}

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, credentials: "include" }),
  endpoints: (builder) => ({
    getProducts: builder.query<DataResponse, void>({
      query: () => {
        return {
          url: "/products",
          credentials: "include",
        };
      },
    }),
    createProducts: builder.mutation<DataResponse, CredentialsRequest>({
      query: (credentials) => {
        return {
          url: "/products",
          body: credentials,
          credentials: "include",
          method: "POST",
        };
      },
    }),
    getCategories: builder.query<{ data: Category[] }, void>({
      query: () => {
        return {
          url: "/categories",
          credentials: "include",
        };
      },
    }),
    getBrands: builder.query<{ data: Brand[] }, void>({
      query: () => {
        return {
          url: "/brand",
          credentials: "include",
        };
      },
    }),
    getColors: builder.query<{ data: Colors[] }, void>({
      query: () => {
        return {
          url: "/colors",
          credentials: "include",
        };
      },
    }),
  }),
});

export const {
  useGetProductsQuery,
  useCreateProductsMutation,
  useGetBrandsQuery,
  useGetCategoriesQuery,
  useGetColorsQuery,
} = productApi;
