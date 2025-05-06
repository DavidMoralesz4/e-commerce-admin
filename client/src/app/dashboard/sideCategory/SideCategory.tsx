import React from "react";

export default function SideCategory() {
  return (
    <aside className="w-64 bg-white rounded-lg shadow-sm p-5">
      <h2 className="text-xl font-bold mb-6 text-gray-800">Categorías</h2>
      <nav className="flex flex-col gap-3">
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-gray-500 uppercase">Deportivas</h3>
          <div className="pl-2 space-y-2">
            <a href="/dashboard/nike" className="text-gray-600 hover:text-orange-500 transition-colors block">
              Nike
            </a>
            <a href="/dashboard/adidas" className="text-gray-600 hover:text-orange-500 transition-colors block">
              Adidas
            </a>
            <a href="/dashboard/puma" className="text-gray-600 hover:text-orange-500 transition-colors block">
              Puma
            </a>
            <a href="/dashboard/reebok" className="text-gray-600 hover:text-orange-500 transition-colors block">
              Reebok
            </a>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-gray-500 uppercase">Casual</h3>
          <div className="pl-2 space-y-2">
            <a href="/dashboard/vans" className="text-gray-600 hover:text-orange-500 transition-colors block">
              Vans
            </a>
            <a href="/dashboard/converse" className="text-gray-600 hover:text-orange-500 transition-colors block">
              Converse
            </a>
            <a href="/dashboard/new-balance" className="text-gray-600 hover:text-orange-500 transition-colors block">
              New Balance
            </a>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-gray-500 uppercase">Lujo</h3>
          <div className="pl-2 space-y-2">
            <a href="/dashboard/gucci" className="text-gray-600 hover:text-orange-500 transition-colors block">
              Gucci
            </a>
            <a href="/dashboard/balenciaga" className="text-gray-600 hover:text-orange-500 transition-colors block">
              Balenciaga
            </a>
            <a href="/dashboard/louis-vuitton" className="text-gray-600 hover:text-orange-500 transition-colors block">
              Louis Vuitton
            </a>
          </div>
        </div>
      </nav>
    </aside>
  );
}
