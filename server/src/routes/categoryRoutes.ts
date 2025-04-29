import {Router} from "express";
import { createCategoryController, getCategoryController } from "../controllers/categoryControllers";

export const productsRoutes: Router = Router();


//// Ruta para obtener las categorias \\\
productsRoutes.get('/categories', getCategoryController)

//// Ruta para crear una categorias \\\
productsRoutes.post('/categories', createCategoryController)