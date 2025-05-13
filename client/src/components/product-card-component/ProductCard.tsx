import Image from "next/image";
import CancelBtn from "../cancel-button-component/CancelBtn";

// type ProductCardProps = {
//   imageUrl: string;
//   title: string;
//   description: string;
//   price: string;
//   brand: string;
//   stock: number;
//   onClose?: () => void;
// };


/* TODO: Ajustar responsive para productos. El producto cambiara un poco su tamano dependiendo de la pantalla */

const ProductCard = () => {
  return (
    <div className="relative max-w-sm w-full xl:w-[250px] bg-[#FFFFFF] rounded-[5px] shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer ">
        <CancelBtn/>
      <div className="flex justify-center p-4">
        <Image
          src="https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw76f76351/products/NIDC0774-141/NIDC0774-141-1.JPG"
          alt={""}
          width={200}
          height={120}
          className="object-contain h-32"
        />
      </div>

      <div className="px-4 pb-3">
        <h2 className="text-lg font-semibold text-gray-900">Nike IWhite</h2>
        <p className="text-sm text-gray-600 truncate">Zapatillas de hombre</p>

        <div className="flex justify-between mt-4 text-sm border-t pt-2 text-gray-700">
          <div>
            <span className="block text-gray-500">Precio</span>
            <span className="font-medium">$223000</span>
          </div>
          <div>
            <span className="block text-gray-500">Marca</span>
            <span className="font-medium">Nike</span>
          </div>
          <div>
            <span className="block text-gray-500">Stock</span>
            <span className="font-medium">5</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

// {
//   imageUrl,
//   title,
//   description,
//   price,
//   brand,
//   stock,
//   onClose,}: ProductCardProps
