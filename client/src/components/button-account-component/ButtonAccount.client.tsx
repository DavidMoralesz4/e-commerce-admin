"use client";

import { RiAccountCircle2Fill } from "react-icons/ri";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import { signOut } from "next-auth/react";

export default function ButtonAccountClient({ session }: any) {
  const [logout, setLogout] = useState(false);

  const handleLogout = () => {
    setLogout(!logout);
  };

  return (
    <>
      <span className="flex bg-[#C84D00] rounded-[10px] hover:bg-orange-600 px-3 items-center p-1 cursor-pointer" onClick={handleLogout}>
        <div className="">
          <RiAccountCircle2Fill size={37} color="#C4C4C4" />
        </div>
        <div className="px-3 flex flex-col ">
          <p className="text-[#7B2B00] text-[15px] font-semibold relative top-[2px]">
            {session?.user.name}
          </p>
          <p className="text-[12px] relative top-[-3px] font-sans">
            {session?.user.email}
          </p>
        </div>

        <div className="px-6 flex flex-col justify-center items-center">
          <FaChevronUp size={12} color="#C4C4C4" />
          <FaChevronDown size={12} color="#C4C4C4" />
        </div>
      </span>

      {logout && (
        <div className="absolute bottom-[37px] left-60 bg-white shadow-lg rounded-md p-2 w-[300px] z-50">
        <button
          onClick={() => signOut()}
          className="w-full text-left p-2 hover:bg-gray-100 text-red-600"
        >
          Cerrar sesión
        </button>
        <button
          className="w-full text-left p-2 hover:bg-gray-100 text-black"
        >
         Mi Cuenta
        </button>
      </div>
      )}
    </>
  );
}
