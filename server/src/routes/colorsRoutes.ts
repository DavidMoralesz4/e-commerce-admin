import {Router} from "express";
import { createColorsController, getColorsController } from "../controllers/colorsControllers";
import { verifyToken } from "../middlewares/verifyToken";

export const colorsRoutes: Router = Router();


//// Ruta para obtener las categorias \\\
colorsRoutes.get('/colors', verifyToken, getColorsController)

//// Ruta para crear una categorias \\\
colorsRoutes.post('/colors', verifyToken, createColorsController)