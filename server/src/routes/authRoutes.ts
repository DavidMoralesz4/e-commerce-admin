import {Router} from 'express';
import { loginController, logoutController, registerController } from '../controllers/authControllers';

export const authRoutes = Router();

authRoutes.post('/login', loginController);

authRoutes.post('/register', registerController);

authRoutes.get('/logout', logoutController)