import {Router} from "express";
import { createColorsController, getColorsController } from "../controllers/colorsControllers";

export const colorsRoutes: Router = Router();


//// Ruta para obtener las categorias \\\
colorsRoutes.get('/colors', getColorsController)

//// Ruta para crear una categorias \\\
colorsRoutes.post('/colors', createColorsController)