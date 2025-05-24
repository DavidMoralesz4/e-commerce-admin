import "reflect-metadata";
import express from "express";
import morgan from "morgan";
import { productsRoutes } from "./routes/productsRoutes";
import { categoryRoutes } from "./routes/categoryRoutes";
import cookieParser from "cookie-parser";
import { authRoutes } from "./routes/authRoutes";
import { brandRoutes } from "./routes/brandRoutes";
import { colorsRoutes } from "./routes/colorsRoutes";
import cors from "cors";
import { uploadRoutes } from "./routes/uploadRoutes";

export const server = express();

const corsOptions = {
  origin: [
    "http://localhost:3000",
    "https://ecommerce-admin-client-production.up.railway.app",
  ],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "Cookie", "Set-Cookie"],
};

server.use(cors(corsOptions));

//// Middlewares \\\\
server.use(morgan("dev"));
server.use(express.json());
server.use(cookieParser());

//// Rutas \\\\
server.use("/api", productsRoutes);
server.use("/api", brandRoutes);
server.use("/api", colorsRoutes);
server.use("/api", categoryRoutes);
server.use("/api/auth", authRoutes);
server.use("/api", uploadRoutes);

