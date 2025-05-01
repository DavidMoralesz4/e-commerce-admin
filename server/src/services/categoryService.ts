// Servicio de categorias \\

import { CategoryModel } from "../database/data-source";

export const getCategoryService = async () => {
  try {
    const categories = await CategoryModel.find();

    return categories;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export const createCategoryService = async (name: string) => {
  try {
    if (!name) {
      throw new Error("Por favor, ingrese una categoria.");
    }

    const category = await CategoryModel.findOneBy({
      name: name,
    });

    if (category) {
      throw new Error("La categoria ya existe.");
    }

    const categoriesCreated = await CategoryModel.create({ name });

    return await CategoryModel.save(categoriesCreated);
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};
