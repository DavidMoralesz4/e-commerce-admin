import { Request, Response } from "express";
import { uploadService } from "../services/uploadService";

export const uploadCSVController = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      res.status(400).json({ message: "No se envió ningún archivo" });
      return;
    }
    await uploadService(req.file?.path);
    res.status(201).json({
      success: true,
      message: "Productos cargados con exito!",
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
};
