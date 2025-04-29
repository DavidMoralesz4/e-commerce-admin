import {Router} from "express";
import { getProductController } from "../controllers/productsControllers";

export const productsRoutes: Router = Router();


//// Ruta para obtener productos \\\
productsRoutes.get('/products', getProductController)