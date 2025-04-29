import { DataSource } from "typeorm";
import {env} from '../config/env'
import { Product } from "../entities/Product";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: env.passwordDb,
    database: "ecommerce_admin",
    synchronize: true,
    logging: false,
    entities: [Product],
    subscribers: [],
    migrations: [],
})


export const ProductModel = AppDataSource.getRepository(Product)