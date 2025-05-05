import 'express'

declare global {   // Amplía los tipos de Express
    namespace Express {
        interface Request {  // Agrega estas propiedades al objeto `req`
            userId?: string;  // El `?` significa "opcional" (puede no estar)
        }
    }
}