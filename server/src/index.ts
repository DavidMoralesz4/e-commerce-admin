import { env } from "./config/env";
import { AppDataSource } from "./database/data-source";
import { server } from "./server";

const connecteDbAndServer = async () => {
  try {
    await AppDataSource.initialize();
    console.log("Conexion a la base de datos exitosa!");

    server.listen(env.port, () => {
      console.log(`Servidor corriendo en el puerto ${env.port} 🚀`);
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log("Error al conectar base de datos", error.message);
      process.exit(1); // mato el programa aqui. Fin de ejecucion
    }
  }
};

connecteDbAndServer();
