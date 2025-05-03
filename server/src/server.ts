import express from "express";
import morgan from "morgan";
import { productsRoutes } from "./routes/productsRoutes";
import { categoryRoutes } from "./routes/categoryRoutes";
import cookieParser from 'cookie-parser'
import "reflect-metadata"


export const server = express();

//// Middlewares \\\\
server.use(morgan("dev"));
server.use(express.json());
server.use(cookieParser());

//// Rutas \\\\
server.use('/api', productsRoutes)
server.use('/api', categoryRoutes)