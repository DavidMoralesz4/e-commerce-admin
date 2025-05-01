import {Router} from 'express'
import { createBrandController, getBrandsController } from '../controllers/brandControllers';

export const brandRoutes = Router();


brandRoutes.get('/brand', getBrandsController)

brandRoutes.post('/brand', createBrandController)