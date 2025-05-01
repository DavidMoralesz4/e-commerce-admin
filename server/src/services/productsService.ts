import { In } from "typeorm";
import {
  BrandModel,
  CategoryModel,
  ColorModel,
  ProductModel,
} from "../database/data-source";

export interface IDataProduct {
  name: string;
  image: string;
  description: string;
  stock: number;
  price: number;
  colors: number[];
  brand: number;
  category: number;
}

export const createProdService = async ({
  name,
  image,
  description,
  stock,
  price,
  colors,
  brand,
  category,
}: IDataProduct) => {
  try {
    if (
      !name ||
      !image ||
      !description ||
      !stock ||
      !price ||
      !colors ||
      !brand ||
      !category
    ) {
      throw new Error("Campos requeridos");
    }

    const theCategory = await CategoryModel.findOneBy({
      id: category,
    });

    const theBrand = await BrandModel.findOneBy({
      id: brand,
    });

    const theColors = await ColorModel.findBy({
      id: In(colors),
    });

    if (!theCategory) {
      throw new Error("La Categoria no fue encontrada");
    }

    if (!theBrand) {
      throw new Error("La Marca no fue encontrada");
    }

    if (!theColors.length) {
      throw new Error("Los Colores no fueron encontrados");
    }

    const product = await ProductModel.create({
      name: name,
      image: image,
      description: description,
      stock: stock,
      price: price,
      colors: theColors,
      category: theCategory,
      brand: theBrand,
    });

    return await ProductModel.save(product);
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export const getProductsService = async () => {
  try {
    const allProducts = await ProductModel.find();
    
    return allProducts;

  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};
