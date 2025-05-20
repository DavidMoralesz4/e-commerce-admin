import "reflect-metadata"
import express from "express";
import morgan from "morgan";
import { productsRoutes } from "./routes/productsRoutes";
import { categoryRoutes } from "./routes/categoryRoutes";
import cookieParser from 'cookie-parser'
import { authRoutes } from "./routes/authRoutes";
import { brandRoutes } from "./routes/brandRoutes";
import { colorsRoutes } from "./routes/colorsRoutes";
import cors from 'cors'

export const server = express();

const corsOptions = {
  origin: ['http://localhost:3000', 'https://ecommerce-admin-client-5tjrnlbhy-zdavid-44s-projects.vercel.app'],
  credentials: true, 
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};
server.use(cors(corsOptions));

//// Middlewares \\\\
server.use(morgan("dev"));
server.use(express.json());
server.use(cookieParser());

//// Rutas \\\\
server.use('/api', productsRoutes);
server.use('/api', brandRoutes);
server.use('/api', colorsRoutes);
server.use('/api', categoryRoutes);
server.use('/api/auth', authRoutes);