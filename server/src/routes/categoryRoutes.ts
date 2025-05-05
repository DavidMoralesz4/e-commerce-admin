import {Router} from "express";
import { createCategoryController, getCategoryController } from "../controllers/categoryControllers";
import { verifyToken } from "../middlewares/verifyToken";

export const categoryRoutes: Router = Router();


//// Ruta para obtener las categorias \\\
categoryRoutes.get('/categories', verifyToken, getCategoryController)

//// Ruta para crear una categorias \\\
categoryRoutes.post('/categories', verifyToken, createCategoryController)
