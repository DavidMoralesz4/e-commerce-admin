import "reflect-metadata"
import express from "express";
import morgan from "morgan";
import { productsRoutes } from "./routes/productsRoutes";
import { categoryRoutes } from "./routes/categoryRoutes";
import cookieParser from 'cookie-parser'
import { authRoutes } from "./routes/authRoutes";
import { brandRoutes } from "./routes/brandRoutes";
import { colorsRoutes } from "./routes/colorsRoutes";


export const server = express();

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