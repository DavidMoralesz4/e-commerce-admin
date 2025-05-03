import { UserModel } from "../database/data-source";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { env } from "../config/env";

export const loginService = async(email: string, password: string) => {
    if(!email) {
        throw new Error('Por favor ingresa correo electronico.')
    }

    if(!password) {
        throw new Error('Por favor ingresa una contraseña.');
    }
    
    // Es un usuario persona (que se registro con un email)
    const user = await UserModel.findOneBy({
        email: email
    })

    if(!user) {
        throw new Error('Usuario no encontrado')
    }

    const passwordHash = await bcrypt.compare(password, user.password);

    if(!passwordHash) {
        throw new Error('Contraseña incorrecta')
    }

    const token = jwt.sign(
        {email: user.email, firstName: user.firstName},
        env.secrect_key || 'thesecrectkey',
        {expiresIn: '1h'}
    )

    
    return {user: user, token: token}
}


export const registerService = async() => {
    try {
        
    } catch (error) {
        
    }
}