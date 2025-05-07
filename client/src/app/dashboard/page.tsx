import AddProductComponent from "@/components/AddProductComponent";
import SearchComponent from "@/components/SearchComponent";
import React from "react";
import SideCategory from "./sideCategory/SideCategory";
import {auth} from '@/auth'

export default async function DashboardPage() {
  const session = await auth();
  
  if(!session) {
    return <div>No autorizado</div>;
  }
  
  return (
    <div className="w-full px-4 md:px-6">
      <h1 className="text-3xl font-bold mb-4 text-black">Inventario</h1>
      <p className="text-black mb-5">Todos los productos</p>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <div className="flex flex-col md:flex-row gap-4 items-start">
            <SearchComponent />
            <AddProductComponent />
          </div>
        </div>
        {/* <div className="lg:w-64">
          <SideCategory />
        </div> */}
      </div>
    </div>
  );
}
