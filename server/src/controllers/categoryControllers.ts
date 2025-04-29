import { Request, Response } from "express"
import { createCategoryService } from "../services/categoryService"

export const getCategoryController = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        
    }
}

export const createCategoryController = async(req: Request, res: Response) => {
    const {name} = req.body
    
    try {
        await createCategoryService(name)

        res.status(201).json({
            success: true,
            message: 'Categoria creada con exito!.'
        })
    } catch (error: unknown) {
        if(error instanceof Error) {
            res.status(500).json({message: error.message});
        }
    }
}
