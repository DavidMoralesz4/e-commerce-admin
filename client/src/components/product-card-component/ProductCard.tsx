// import Image from "next/image";
// import React from "react";
// import CancelBtn from "../cancel-button-component/CancelBtn";

// export default function ProductCard() {
//   return (
//     <div className="flex flex-col w-auto h-[350px] bg-[#FFFFFF] shadow-sm rounded-[5px] border border-gray-300 lg:w-[240px]">
//       <CancelBtn />
//       <div className="flex items-center justify-center">
//         <Image
//           src="https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw76f76351/products/NIDC0774-141/NIDC0774-141-1.JPG"
//           alt="productoFoto.png"
//           width={220}
//           height={90}
//           className="lg:w-[240px] lg:h-[220px]"
//         />
//       </div>
//       <div className="p-2 h-48">
//         <div>
//           <div className="flex justify-between">
//           <strong className="text-black">Title</strong>
//             <div className="text-black">blue</div>
//             <div className="text-black">white</div>
//             <div className="text-black">black</div>
//           </div>
//           <p className="text-black">description</p>
//         </div>
//         <hr />
//         <div className="flex justify-center items-center">
//           <div>
//             <p className="text-black">Precio</p>
//             <strong className="text-black">1200</strong>
//           </div>
//           <div>
//             <p className="text-black">Marca</p>
//             <strong className="text-black">Nike</strong>
//           </div>
//           <div>
//             <p className="text-black">Stock</p>
//             <strong className="text-black">20</strong>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
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

const ProductCard = () => {
  return (
    <div className="relative max-w-sm w-full xl:w-[250px] bg-[#FFFFFF] rounded-[5px] shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer">
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
