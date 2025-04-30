import { Request, Response } from "express";
import { createColorsService } from "../services/colorsService";

export const getColorsController = (req: Request, res: Response) => {
  try {
        

  } catch (error) {

  }
};

export const createColorsController = async (req: Request, res: Response) => {
  const { color } = req.body;

  try {
    await createColorsService(color);
    res.status(201).json({
      success: true,
      message: "Color creado con exito!.",
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
};
