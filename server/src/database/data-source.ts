import { DataSource } from "typeorm";
import {env} from '../config/env'
import { Product } from "../entities/Product";
import { User } from "../entities/User";
import { Category } from "../entities/Category";
import { Brand } from "../entities/Brand";
import { Color } from "../entities/Color";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: env.passwordDb,
    database: "ecommerce_admin",
    synchronize: true,
    logging: false,
    entities: [Product, User, Category, Brand, Color],
    subscribers: [],
    migrations: [],
})


export const ProductModel = AppDataSource.getRepository(Product);

export const CategoryModel = AppDataSource.getRepository(Category);

export const BrandModel = AppDataSource.getRepository(Brand);

export const ColorModel = AppDataSource.getRepository(Color);

export const UserModel = AppDataSource.getRepository(User);