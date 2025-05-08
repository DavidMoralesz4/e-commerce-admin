import AddProductComponent from "@/components/AddProductComponent";
import SearchComponent from "@/components/SearchComponent";
import React from "react";
import SideCategory from "./sideCategory/SideCategory";
import { auth } from "@/auth";

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    return <div>No autorizado</div>;
  }

  return (
    <>
      <div className="w-full px-4 md:px-6">
        <h1 className="text-2xl font-semibold mb-4 text-black">
          Tu Inventario
        </h1>

        <div className="absolute left-237 top-[50px] z-50 md:left-237 xl:left-360 xl:top-[70px]">
          <SideCategory />
        </div>

        <p className="text-black mb-5">Todos los productos</p>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="">
            <div className="flex flex-col md:flex-row gap-4 items-start ">
              <SearchComponent />
              <AddProductComponent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
