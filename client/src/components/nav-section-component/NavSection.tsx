"use client";

import { FaShop } from "react-icons/fa6";
import { FaClipboardList } from "react-icons/fa";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavSection() {
  const path = usePathname();

  // Estilo base común para todos los items
  const baseStyle =
    "flex items-center gap-2 px-3 py-2 rounded-[6px] transition-colors duration-200";
  // Estilo cuando está activo
  const activeStyle = "bg-[#5B2600] text-[#C74601]";
  // Estilo hover (solo aplica cuando no está activo)
  const hoverStyle =
    "hover:bg-[#5B2600] hover:bg-opacity-50 hover:text-[#C74601]";

  return (
    <nav className="flex flex-col gap-4">
      <div>
        <Link
          href="/dashboard"
          className={`${baseStyle} ${
            path === "/dashboard" ? activeStyle : hoverStyle
          }`}
        >
          <FaClipboardList
            size={20}
            className={` ${
              path === "/dashboard" ? activeStyle : hoverStyle
            } `}
          />
          <span className="hidden md:flex md:w-40">Productos</span>
        </Link>
      </div>

      <div>
        <Link
          href="/dashboard/orders"
          className={`${baseStyle} ${
            path === "/dashboard/orders" ? activeStyle : hoverStyle
          }`}
        >
          <FaShop
            size={20}
            className={` ${
              path === "/dashboard/orders" ? activeStyle : hoverStyle
            } `}
          />
          <span className="hidden md:flex">Ventas</span>
        </Link>
      </div>
    </nav>
  );
}
