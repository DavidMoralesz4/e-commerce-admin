import { Request, Response } from "express";
import {
  createCategoryService,
  getCategoryService,
} from "../services/categoryService";

export const getCategoryController = async (req: Request, res: Response) => {
  try {
    const categories = await getCategoryService();

    res.status(200).json({
      success: true,
      message: "Categorias",
      data: categories,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
};

export const createCategoryController = async (req: Request, res: Response) => {
  const { name } = req.body;

  try {
    await createCategoryService(name);

    res.status(201).json({
      success: true,
      message: "Categoria creada con exito!.",
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
};
