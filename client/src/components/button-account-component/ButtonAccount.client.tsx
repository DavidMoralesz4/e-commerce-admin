"use client";

import { RiAccountCircle2Fill } from "react-icons/ri";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { toast } from "sonner";
import { useLogoutUserMutation } from "@/services/authApi";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setFailed, setLoading, logout } from "../../features/auth/authSlice";

export default function ButtonAccountClient() {
  const [logoutModal, setLogoutModal] = useState(false);
  const user = useSelector((state: RootState) => state.auth.user);
  const [logoutUser] = useLogoutUserMutation();
  const route = useRouter();
  const dispatch = useDispatch();

  const handleLogout = () => {
    setLogoutModal(!logoutModal);
  };

  const closeSession = async () => {
    try {
      dispatch(setLoading());

      const res = await logoutUser().unwrap();
      dispatch(logout());
      
      toast.success(res.message);
      route.push("/login");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
      toast.error("Ocurrió un error al cerrar sesión.");
      dispatch(setFailed());
    }
  };

  return (
    <>
      <span
        className="flex bg-orange-600 rounded-[10px] hover:bg-orange-500 md:px-3 items-center p-1 cursor-pointer"
        onClick={handleLogout}
      >
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

      {logoutModal && (
        <div className="absolute w-40 bottom-[35px] left-12 md:bottom-[37px] md:left-62 bg-white shadow-lg rounded-md p-2 md:w-[300px] z-50">
          <button
            className="w-full text-left p-2 hover:bg-gray-100 text-red-600"
            onClick={() => closeSession()}
          >
            Cerrar sesión
          </button>
          <button className="w-full text-left p-2 hover:bg-gray-100 text-black">
            Mi Cuenta
          </button>
        </div>
      )}
    </>
  );
}
