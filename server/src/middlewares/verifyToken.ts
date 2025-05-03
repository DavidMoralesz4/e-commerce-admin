import { NextFunction, Request, Response } from "express";


export const verifyToken = (req: Request, res:Response, next: NextFunction) => {
    // - Token del usuario, osea la firma de quien esta ingresando

    // - Si no coincide o no hay entonces mostrar un mensaje 

    // - Verificar el usuario

    // - Dar acceso
    next();
};