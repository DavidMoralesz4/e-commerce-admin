import { UserModel } from "../database/data-source";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { env } from "../config/env";

export const loginService = async (email: string, password: string) => {
  if (!email) {
    throw new Error("Por favor ingresa correo electronico.");
  }

  if (!password) {
    throw new Error("Por favor ingresa una contraseña.");
  }

  // Es un usuario persona (que se registro con un email)
  const user = await UserModel.findOneBy({
    email: email,
  });

  if (!user) {
    throw new Error("Usuario no encontrado");
  }

  const passwordHash = await bcrypt.compare(password, user.password);

  if (!passwordHash) {
    throw new Error("Contraseña incorrecta");
  }

  const token = jwt.sign(
    { _id: user?.id, email: user?.email, firstName: user?.firstName },
    env.secrect_key || "thesecrectkey",
    { expiresIn: "1h" }
  );

  return { user, token };
};


export const registerService = async (
  firstName: string,
  lastName: string,
  document: string,
  email: string,
  password: string
) => {
  try {
    if(!firstName || !lastName || !document || !email || !password) throw new Error('Campos requeridos');

    const userRegister = await UserModel.findOneBy({
        email: email,
      });

    if(userRegister) throw new Error('El email ya esta en uso')

    const passwordHash = await bcrypt.hashSync(password, 10);

    const newUserRegister = await UserModel.create({
        firstName: firstName,
        lastName: lastName,
        document: document,
        email: email,
        password: passwordHash
    })

    return await UserModel.save(newUserRegister);

  } catch (error: unknown) {
    if(error instanceof Error) {
        throw new Error(error.message);
    }
  }
};
