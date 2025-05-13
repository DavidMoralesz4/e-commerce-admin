'use client'
import {
  getBrands,
  getCategories,
  getColors,
} from "@/services/productOptionsService";
import { createProduct } from "@/services/productService";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IoWarning } from "react-icons/io5";

type CreateProd = {
  name: string;
  image: string;
  description: string;
  stock: number;
  price: number;
  colors: number[];
  brand: number;
  category: number;
};

export default function CreateForm() {
  const { register, handleSubmit } = useForm<CreateProd>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [brands, setBrands] = useState([]);
  const [colors, setColors] = useState([]);
  const [categories, setCategories] = useState([]);

  const onSubmit: SubmitHandler<CreateProd> = async (data) => {
    setLoading(true);
    setError(null);

    try {
      const payload = {
        ...data,
        stock: Number(data.stock),
        price: Number(data.price),
        colors: Number(data.colors[0]),
        brand: Number(data.brand),
        category: Number(data.category),
      };

      await createProduct(payload);
      alert("Producto creado correctamente ✅");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const [brandsData, colorsData, categoriesData] = await Promise.all([
          getBrands(),
          getColors(),
          getCategories(),
        ]);
        setBrands(brandsData);
        console.log(brandsData);
        setColors(colorsData);
        setCategories(categoriesData);
      } catch (err) {
        console.error("Error al cargar opciones:", err);
      }
    };

    fetchOptions();
  }, []);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col bg-gray-950 justify-center items-center"
    >
      <div>
        <div className="font-bold text-[26px] md:text-[32px] mb-5">
          Crear un producto
        </div>
        <div className="flex gap-5 justify-between">
          <div className="flex flex-col">
            <label htmlFor="">Nombre</label>
            <input
              type="text"
              className="bg-[#D9D9D9] rounded-[5px] text-black px-2"
              {...register("name")}
            />
          </div>
          <div className="flex flex-col justify-end items-end">
            <label htmlFor="" className="">
              url de Imagen
            </label>
            <input
              type="text"
              className="bg-[#D9D9D9] rounded-[5px] text-black px-2"
              {...register("image")}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <label htmlFor="">Descripcion del producto</label>
          <input
            type="text"
            className="bg-[#D9D9D9] w-full h-14 rounded-[5px] text-black px-2"
            {...register("description")}
          />
        </div>
        <div className="flex gap-10 justify-center">
          <div className="flex flex-col">
            {" "}
            <label htmlFor="">Color</label>
            <select
              {...register("colors")}
              className="bg-[#D9D9D9] w-32 rounded-[5px] text-black px-2"
            >
              <option value="">Seleccione</option>
              {colors.map((color: any) => (
                <option key={color.id} value={color.id}>
                  {color.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col justify-center items-center">
            <label htmlFor="">Marca</label>
            <select
              {...register("brand")}
              className="bg-[#D9D9D9] w-32 rounded-[5px] text-black px-2"
            >
              <option value="">Seleccione</option>
              {brands.map((brand: any) => (
                <option key={brand.id} value={brand.id}>
                  {brand.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col opacity-50 pointer-events-none justify-end items-end">
            <label htmlFor="" className="">
              Talla
            </label>
            <input
              type="text"
              disabled
              className="bg-[#D9D9D9] w-32 rounded-[5px] text-black px-2 cursor-not-allowed"
            />
          </div>
        </div>
        <div className="flex gap-10 justify-center">
          <div className="flex flex-col">
            {" "}
            <label htmlFor="">Precio</label>
            <input
              type="number"
              className="bg-[#D9D9D9] w-32 rounded-[5px]  text-black px-2"
              //   onChange={handleChange}
              {...register("price")}
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <label htmlFor="">Categoria</label>
            <select
              {...register("category")}
              className="bg-[#D9D9D9] w-32 rounded-[5px] text-black px-2"
            >
              <option value="">Seleccione</option>
              {categories.map((category: any) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col justify-end items-end">
            <label htmlFor="">Unidades</label>
            <input
              type="number"
              className="bg-[#D9D9D9] w-32 rounded-[5px] text-black px-2"
              {...register("stock")}
            />
          </div>
        </div>
        <div className="mt-5">
          <button
            type="submit"
            disabled={loading}
            className={`group relative w-full flex justify-center py-2.5 px-4 border border-transparent text-sm font-medium rounded-lg text-[#C74601] bg-[#5B2600] hover:text-[#f8d0af] hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Procesando...
              </>
            ) : (
              "Crear producto"
            )}
          </button>
        </div>
      </div>
      {error && (
        <div className="p-4 flex justify-center items-center gap-2 text-sm text-red-500 bg-red-500/10 rounded-lg mt-5">
          <IoWarning color="red" />
          {error}
        </div>
      )}
    </form>
  );
}
