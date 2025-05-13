// services/productService.ts
import axios from "axios";

export async function createProduct(data: any) {
  try {
    const response = await axios.post("http://localhost:8181/api/products", data, {withCredentials: true}); // cambia el endpoint si es necesario
    return response.data;
  } catch (error: any) {
    console.error("Error creando producto:", error);
    throw new Error(
      error.response?.data?.message || "Error al crear el producto"
    );
  }
}
