"use client";

import { RiAccountCircle2Fill } from "react-icons/ri";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export default function ButtonAccountClient() {
  const [logout, setLogout] = useState(false);
  const user = useSelector((state: RootState) => state.auth.user)
  
  
const handleLogout = () => {
    setLogout(!logout);
  };

  return (
    <>
      <span className="flex bg-orange-600 rounded-[10px] hover:bg-orange-500 md:px-3 items-center p-1 cursor-pointer" onClick={handleLogout}>
        <div className="">
          <RiAccountCircle2Fill size={37} color="#C4C4C4" />
        </div>
        <div className="px-3 md:flex md:flex-col hidden">
          <p className="text-[#7B2B00] text-[15px] font-semibold relative top-[2px]">
            {user?.firstName}
          </p>
          <p className="text-[12px] relative top-[-3px] font-sans">
            {user?.email}
          </p>
        </div>
        <div className="px-6 md:flex md:flex-col md:justify-center md:items-center hidden">
          <FaChevronUp size={12} color="#C4C4C4" />
          <FaChevronDown size={12} color="#C4C4C4" />
        </div>
      </span>

      {logout && (
        <div className="absolute w-40 bottom-[35px] left-12 md:bottom-[37px] md:left-62 bg-white shadow-lg rounded-md p-2 md:w-[300px] z-50">
        <button
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
