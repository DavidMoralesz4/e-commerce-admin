import ButtonAccountClient from "@/components/button-account-component/ButtonAccount.client";
import NavSection from "@/components/nav-section-component/NavSection";
import React from "react";

export default function SideBar() {
  return (
    <aside className="h-screen w-12 md:w-64 md:flex bg-gray-950 text-white flex-col p-5 fixed z-40 flex items-center">
      <h2 className="text-2xl hidden md:flex font-bold mb-14 text-center">SoftInventory</h2>
      <h2 className="text-2xl font-bold mb-14 md:hidden">S</h2>
      <div>
        <NavSection />
      </div>
      <div className="mt-auto mb-4">
        <ButtonAccountClient />
      </div>
    </aside>
  );
}
