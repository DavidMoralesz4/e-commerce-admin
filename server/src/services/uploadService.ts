import fs from "fs";
import csvParser from "csv-parser";
import {
  BrandModel,
  CategoryModel,
  ProductModel,
} from "../database/data-source";
import { Product } from "../entities/Product";

export const uploadService = async (filePath: string): Promise<void> => {
  const products: Product[] = [];
  const errors: any[] = [];

  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(csvParser())
      .on("data", async (row) => {
        try {
          const stock = parseInt(row.unidades, 10);
          if (isNaN(stock)) throw new Error("Unidades inválidas");

          const price = parseFloat(row.precio);
          if (isNaN(price)) throw new Error("Precio inválido");

          // Buscar o crear categoría
          let category = await CategoryModel.findOne({
            where: { name: row.categoria },
          });

          if (!category) {
            category = await CategoryModel.create({ name: row.categoria });
            await CategoryModel.save(category);
          }

          // Buscar o crear marca
          let brand = await BrandModel.findOne({
            where: { name: row.marca },
          });

          if (!brand) {
            brand = await BrandModel.create({ name: row.marca });
            await BrandModel.save(brand);
          }

          // Procesar colores si es necesario
          // (colors es un string por ahora)
          const colors = row.color;

          const product = ProductModel.create({
            name: row.nombre,
            image: row.urlImagen,
            description: row.descripcion,
            stock,
            price,
            colors,
            brand,
            category,
          });

          products.push(product);
          await ProductModel.save(products); // Guardar todos los productos a la vez
        } catch (error) {
          console.error("Error al guardar producto:", error);
          errors.push({ row, error }); 
        }
      })
      .on("end", async () => {
        try {

          if (errors.length > 0) {
            console.error("Errores durante la creación de productos:", errors);
            return reject(
              new Error(`Se encontraron errores en ${errors.length} productos.`)
            );
          }
          resolve();
        } catch (error) {
          console.error(
            "Error al guardar productos en la base de datos:",
            error
          );
          reject(new Error("Error al guardar productos."));
        }
      })
      .on("error", (error) => {
        console.error("Error al procesar el archivo CSV:", error);
        reject(new Error("Error al procesar el archivo CSV."));
      });
  });
};
