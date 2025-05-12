import React, { ReactNode } from "react";
import SideBar from "./sidebar/SideBar";

export default function DashboardLayout({ children }: { children: ReactNode }) {

  return (
     <div className="flex bg-gray-950 min-h-screen">
      <SideBar />
      <main className="flex flex-1 bg-gray-100 px-10 md:px-7 pt-8 md:p-10 m-2 rounded-[5px] ml-0 md:ml-64">
        <div className="flex-1">{children}</div>
      </main>
    </div>
  );
}
