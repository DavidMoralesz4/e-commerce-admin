import React from "react";

export default function CancelBtn() {
  return (
    <button
      //    {onClose && ()}    onClick={() => {}}
      className="absolute top-2 right-2 text-gray-600 hover:text-black rounded-full bg-white shadow-md w-7 h-8 p-1 "
    >
      <strong className="text-[12px]">✕</strong>
    </button>
  );
}
