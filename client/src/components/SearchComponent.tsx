import React from "react";
import { FiSearch } from "react-icons/fi";

export default function SearchComponent() {
  return (
    <div className="flex  max-w-md mx-auto shadow-sm rounded-2xl overflow-hidden">
      <input
        type="text"
        placeholder="camisa oversize..."
        className="flex-1 px-4 py-2 rounded-l-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white text-gray-800"
        style={{ minWidth: "320px", maxWidth: "350px" }}
      />
      <button
        type="submit"
        className="bg-orange-600 hover:bg-orange-500 text-white px-4 py-2 rounded-r-lg flex items-center justify-center border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
        aria-label="Buscar"
      >
        <FiSearch size={20} />
      </button>
    </div>
  );
}