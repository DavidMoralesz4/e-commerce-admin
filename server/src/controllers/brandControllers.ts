import { Request, Response } from "express";
import { createBrandService, getBrandsService } from "../services/brandService";

export const createBrandController = async(req: Request, res: Response) => {
    const {marca} = req.body

    try {
        await createBrandService(marca)
        res.status(201).json({
            success: true,
            message: 'Marca creada con exito!.'
        })
    } catch (error: unknown) {
        if(error instanceof Error) {
            res.status(500).json({
                success: false,
                message: error.message
            })
        }
    }
}


export const getBrandsController = async(_: Request, res: Response) => {

    try {
        const allBrands = await getBrandsService()
        res.status(201).json({
            success: true,
            message: 'Todas las marcas',
            data: allBrands
        })
    } catch (error: unknown) {
        if(error instanceof Error) {
            res.status(500).json({
                success: false,
                message: error.message
            })
        }
    }
}