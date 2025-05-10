import React, { ReactNode } from "react";
import SideBar from "./sidebar/SideBar";
import SideCategory from "./sideCategory/SideCategory";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-950">
      <SideBar />
      <main className="flex bg-gray-100 p-8 m-2 rounded-[5px] w-auto">
        {children}
        <SideCategory />
      </main>
    </div>
  );
}
