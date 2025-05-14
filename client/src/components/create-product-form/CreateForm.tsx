"use client";
import {
  useCreateProductsMutation,
  useGetBrandsQuery,
  useGetCategoriesQuery,
  useGetColorsQuery,
} from "@/services/productApi";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IoWarning } from "react-icons/io5";
import { toast } from "sonner";

interface Brand {
  id: number;
  name: string;
}

interface Category {
  id: number;
  name: string;
}

interface Colors {
  id: number;
  name: string;
}

interface CredentialsRequest {
  name: string;
  image: string;
  description: string;
  stock: number;
  price: number;
  colors: Colors[];
  brand: Brand;
  category: Category;
}

export default function CreateForm({ onClose }: { onClose: () => void }) {
  const { register, handleSubmit, reset } = useForm<CredentialsRequest>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [createProduct] = useCreateProductsMutation();
  const { data: brandData } = useGetBrandsQuery();
  const { data: categoryData } = useGetCategoriesQuery();
  const { data: colorData } = useGetColorsQuery();

  const onSubmit: SubmitHandler<CredentialsRequest> = async (data) => {
    setLoading(true);
    setError(null);

    try {
      const fixedData = {
      ...data,
      brand: JSON.parse(data.brand as unknown as string),
      category: JSON.parse(data.category as unknown as string),
      colors: Array.isArray(data.colors)
        ? data.colors.map((c: any) => JSON.parse(c))
        : [],
    };

      const response = await createProduct(fixedData);
      console.log("Raw response:", response);
      console.log(response.data?.message);
      console.log(response.data?.data);
      
      toast.success(response.data?.message)
      reset()
      onClose();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

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
              multiple
              className="bg-[#D9D9D9] w-32 rounded-[5px] text-black px-2"
            >
              <option value="">Seleccione</option>
              {colorData?.data?.map((color) => (
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
              {brandData?.data?.map((brand) => (
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
              {categoryData?.data?.map((category) => (
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
