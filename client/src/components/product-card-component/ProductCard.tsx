import Image from "next/image";
import CancelBtn from "../cancel-button-component/CancelBtn";
import { CredentialsRequest } from "@/services/productApi";



/* TODO: Ajustar responsive para productos. El producto cambiara un poco su tamano dependiendo de la pantalla */

const ProductCard = ({
  name,
  image,
  description,
  price,
  stock,
  colors,
  brand,
  category
  }: CredentialsRequest) => {
  return (
    <div className="relative max-w-sm w-full xl:w-[250px] bg-[#FFFFFF] rounded-[5px] shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer ">
        <CancelBtn/>
      <div className="flex justify-center p-4">
        <img
          src={image}
          alt={name}
          width={200}
          height={120}
          className="object-contain h-32"
        />
      </div>

      <div className="px-4 pb-3">
        <h2 className="text-lg font-semibold text-gray-900">{name}</h2>
        <p className="text-sm text-gray-600 truncate">{description}</p>

        <div className="flex justify-between mt-4 text-sm border-t pt-2 text-gray-700">
          <div>
            <span className="block text-gray-500">Precio</span>
            <span className="font-medium">${price}</span>
          </div>
          <div>
            <span className="block text-gray-500">Marca</span>
            <span className="font-medium">{brand.name}</span>
          </div>
          <div>
            <span className="block text-gray-500">Stock</span>
            <span className="font-medium">{stock}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;


