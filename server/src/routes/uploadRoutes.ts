import {Router} from "express";
import { verifyToken } from "../middlewares/verifyToken";
import { uploadCSVController } from "../controllers/uploadControllers";
import upload from "../middlewares/uploadMiddleware";

export const uploadRoutes: Router = Router();


//// Ruta para obtener productos \\\
uploadRoutes.post('/upload', verifyToken, upload.single("csvFile"), uploadCSVController)