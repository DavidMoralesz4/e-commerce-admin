import { Request, Response } from "express";
import { loginService, registerService } from "../services/authService";

export const loginController = async(req: Request, res: Response) => {
    const {email, password} = req.body

    try {
        const { token, user } = await loginService(email, password);

        res.cookie('tokenkeysecret', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
        })

        res.status(200).json({
            success: true,
            message: 'Ingresaste con exito!',
            data: user
        })
    } catch (error: unknown) {
        if(error instanceof Error){
            res.status(500).json({
                success: false,
                message: error.message
            })
        }
    }
}

export const registerController = async(req: Request, res: Response) => {
    const {firstName, lastName, document, email, password} = req.body

    try {
        
        await registerService(firstName, lastName, document, email, password);

        res.status(201).json({
            success: true,
            message: 'Te registraste con exito!'
        })

    } catch (error: unknown) {
        if(error instanceof Error){
            res.status(500).json({
                success: false,
                message: error.message
            })
        }
    }
}

export const logoutController = (req: Request, res: Response) => {
    try {
        res.clearCookie('tokenkeysecret')
        res.status(200).json({
            success: true,
            message: 'Has cerrado sesion!'
        })
    } catch (error: unknown) {
        if(error instanceof Error){
            res.status(500).json({
                success: false,
                message: error.message
            })
        }
    }
}