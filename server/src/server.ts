import express from "express";
import morgan from "morgan";
import "reflect-metadata"

export const server = express();

server.use(morgan("dev"));
server.use(express.json());


