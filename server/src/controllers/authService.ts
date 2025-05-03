import { Request, Response } from "express";
import { loginService } from "../services/authService";

export const loginController = async(req: Request, res: Response) => {
    const {email, password} = req.body

    try {
        const {token, user} =  await loginService(email, password);

        res.cookie('tokenkeysecret', token, {
            httpOnly: true
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