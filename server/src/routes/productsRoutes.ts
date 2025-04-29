import {Router} from "express";
import { createProdController, getProductController } from "../controllers/productsControllers";

export const productsRoutes: Router = Router();


//// Ruta para obtener productos \\\
productsRoutes.get('/products', getProductController)

productsRoutes.post('/products', createProdController)