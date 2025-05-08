import React from 'react'

export default function AddProductComponent() {
  return (
    <div className="flex w-48 max-w-md mx-auto shadow-sm rounded-lg overflow-hidden">
       <button
            type="submit"
            className="group relative w-48 flex justify-center py-2.5 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-orange-600 hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            Crear productos
          </button>
    </div>
  )
}
