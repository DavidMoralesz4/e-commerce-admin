import { ColorModel } from "../database/data-source";

export const createColorsService = async (color: string) => {
  try {
    if (!color) {
      throw new Error("Por favor, ingrese un color valido.");
    }

    const theColor = await ColorModel.findOneBy({
      name: color,
    });

    if (theColor) {
      throw new Error("El color ya existe, intenta con otro.");
    }

    const newColor = await ColorModel.create({
      name: color,
    });

    return await ColorModel.save(newColor);
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export const getColorsService = async () => {
  try {
    const allColors = await ColorModel.find();

    return allColors;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export const getColorByName = async (color: string) => {
  try {
    const getColor = await ColorModel.find({
      where: {
        name: color,
      },
      relations: ["name"],
    });

    return getColor;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};
