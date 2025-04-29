import express from "express";
import morgan from "morgan";
import "reflect-metadata"
import { productsRoutes } from "./routes/productsRoutes";
import { categoryRoutes } from "./routes/categoryRoutes";

export const server = express();

//// Middlewares \\\\
server.use(morgan("dev"));
server.use(express.json());


//// Rutas \\\\
server.use('/api', productsRoutes)
server.use('/api', categoryRoutes)