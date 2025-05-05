import {Router} from "express";
import { createProdController, getProductController } from "../controllers/productsControllers";
import { verifyToken } from "../middlewares/verifyToken";

export const productsRoutes: Router = Router();


//// Ruta para obtener productos \\\
productsRoutes.get('/products', verifyToken, getProductController)

productsRoutes.post('/products', verifyToken, createProdController)