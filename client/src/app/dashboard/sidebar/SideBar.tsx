import ButtonAccountServer from "@/components/button-account-component/ButtonAccount.server";
import React from "react";

export default function SideBar() {
  return (
    <aside className="h-screen w-64 bg-gray-950 text-white flex flex-col p-5 ">
      <h2 className="text-2xl font-bold mb-14 text-center">SoftInventory</h2>
      <nav className="flex flex-col gap-4">
        <a href="/dashboard" className="hover:text-orange-400">
          Productos
        </a>
        <a href="/dashboard/orders" className="hover:text-orange-400">
          Ventas
        </a>
      </nav>

      <div className="mt-auto mb-4">
        <ButtonAccountServer />
      </div>
    </aside>
  );
}
