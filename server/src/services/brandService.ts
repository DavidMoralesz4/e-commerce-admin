import { BrandModel } from "../database/data-source";

export const createBrandService = async (marca: string) => {
  try {
    if (!marca) {
      throw new Error("Ingresa un marca.");
    }

    const theBrand = await BrandModel.findOneBy({
      name: marca,
    });

    if (theBrand) {
      throw new Error("Esta marca ya existe");
    }

    const newBrand = await BrandModel.create({
      name: marca,
    });

    return await BrandModel.save(newBrand);
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export const getBrandsService = async () => {
  try {
    const allBrands = await BrandModel.find();

    return allBrands;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};
