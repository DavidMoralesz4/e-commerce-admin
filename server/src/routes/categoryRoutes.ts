import {Router} from "express";
import { createCategoryController, getCategoryController } from "../controllers/categoryControllers";

export const categoryRoutes: Router = Router();


//// Ruta para obtener las categorias \\\
categoryRoutes.get('/categories', getCategoryController)

//// Ruta para crear una categorias \\\
categoryRoutes.post('/categories', createCategoryController)