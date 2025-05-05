import { NextFunction, Request, Response } from "express";
import { env } from "../config/env";
import jwt from "jsonwebtoken";

interface IPayload {
    _id: string
    firstName: string
    email: string
    iat: number
  }
  

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // - Token del usuario, osea la firma de quien esta ingresando
  const token = req.cookies?.tokenkeysecret;

  // - Si no coincide o no hay entonces mostrar un mensaje
  if (!token) {
    res.status(401).json({
      message: "Acceso denegado",
    });
    return;
  }

  // - Verificar el usuario
try {
    const decoded = jwt.verify(token, env.secrect_key || "theSecret")as IPayload;
    req.userId = decoded._id;
    next();
} catch (error) {
    res.status(403).json({ message: "Token inválido" });
}
};
