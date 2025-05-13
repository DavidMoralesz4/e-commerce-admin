// services/optionsService.ts
import axios from "axios";

const BASE_URL = "http://localhost:8181/api";

export const getCategories = async () => {
  const res = await axios.get('http://localhost:8181/api/categories', {
    withCredentials: true, // permite enviar cookies
  });
  return res.data.data; // ⚠️ Solo retornamos el array de categorías
};

export const getBrands = async () => {
  const res = await axios.get('http://localhost:8181/api/brand', {
    withCredentials: true,
  });
  return res.data.data; // ⚠️ Igual acá
};

export const getColors = async () => {
  const res = await axios.get('http://localhost:8181/api/colors', {
    withCredentials: true,
  });
  return res.data.data;
};