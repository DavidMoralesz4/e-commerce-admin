import { Request, Response } from "express";
import { createProdService, IDataProduct } from "../services/productsService";

export const getProductController = (req: Request, res: Response) => {
  try {
  } catch (error) {}
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
