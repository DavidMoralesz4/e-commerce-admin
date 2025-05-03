
export const loginService = async(email: string, password: string) => {
    try {
        if(!email) {
            throw new Error('Por favor ingresa correo electronico.')
        }

        if(!password) {
            throw new Error('Por favor ingresa una contraseña.');
        }

    } catch (error) {
        
    }
}


export const registerService = async() => {
    try {
        
    } catch (error) {
        
    }
}