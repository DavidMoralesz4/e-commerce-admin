'use client'
import React, { useState } from 'react'
import AddProductComponent from '../AddProductComponent';
import CreateForm from '../create-product-form/CreateForm';

export default function ShowForm() {
  const [showform, setShowform] = useState(false);

  const handleShowForm = () => {
    setShowform(!showform);
  };

  return (
    <div>
      <AddProductComponent onClick={handleShowForm} />

      {showform && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-2 backdrop-blur-[3px]">
          <div className="bg-gray-950 rounded-lg shadow-lg p-10">
            <CreateForm onClose={handleShowForm}/>
            <button
              onClick={handleShowForm}
              className="mt-4 text-sm text-red-500 hover:underline flex justify-center items-center"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
