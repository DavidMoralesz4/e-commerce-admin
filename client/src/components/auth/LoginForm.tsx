"use client"

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface Inputs {
  email: string;
  password: string;
}

export default function LoginForm() {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmitLogin: SubmitHandler<Inputs> = (data) => {
    console.log("Se envio el formulario", data);
  };

  return (
    <div className="w-full max-w-md space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold text-white">SoftInventory</h1>
        <p className="mt-4 text-sm text-gray-300">
          Bienvenid@! inicia sesión para comenzar a gestionar tu negocio
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmitLogin)} className="mt-8 space-y-8">
        <div className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Introduce tu correo electrónico"
              {...register("email", {required: true})}
              className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Introduce tu contraseña"
              {...register("password", {required: true})}
              className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2.5 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            Iniciar sesión
          </button>
        </div>
      </form>
    </div>
  );
}
