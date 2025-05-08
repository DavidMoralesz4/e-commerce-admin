import ButtonAccountServer from "@/components/button-account-component/ButtonAccount.server";
import NavSection from "@/components/nav-section-component/NavSection";
import React from "react";

export default function SideBar() {
  return (
    <aside className="h-screen w-64 bg-gray-950 text-white flex flex-col p-5 ">
      <h2 className="text-2xl font-bold mb-14 text-center">SoftInventory</h2>
      <div>
        <NavSection />
      </div>

      <div className="mt-auto mb-4">
        <ButtonAccountServer />
      </div>
    </aside>
  );
}
