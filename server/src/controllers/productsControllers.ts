import { Request, Response } from "express";
import {
  createProdService,
  getProductsService,
} from "../services/productsService";

export const getProductController = async (_: Request, res: Response) => {
  try {
    const allProducts = await getProductsService();

    if (allProducts?.length == null) {
      res.status(204).json({ message: "No hay productos!!." });
      return
    }

    res.status(200).json({
      success: true,
      message: "Todos los productos",
      data: allProducts,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ success: false, message: error.message });
    }
  }
};

export const createProdController = async (req: Request, res: Response) => {
  const { name, image, description, stock, price, colors, brand, category } =
    req.body;

  try {
    await createProdService({
      name,
      image,
      description,
      stock,
      price,
      colors,
      brand,
      category,
    });

    res.status(201).json({
      success: true,
      message: "Producto creado con exito!",
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ success: false, message: error.message });
    }
  }
};
