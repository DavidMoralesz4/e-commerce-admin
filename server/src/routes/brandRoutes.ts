import {Router} from 'express'
import { createBrandController, getBrandsController } from '../controllers/brandControllers';
import { verifyToken } from '../middlewares/verifyToken';

export const brandRoutes = Router();


brandRoutes.get('/brand', verifyToken, getBrandsController)

brandRoutes.post('/brand', verifyToken, createBrandController)