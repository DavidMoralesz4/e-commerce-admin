"use client";

import { useLoginUserMutation } from "@/services/authApi";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  loginUserState,
  setFailed,
  setLoading,
  logout,
} from "../../features/auth/authSlice";
import { useDispatch } from "react-redux";
import TestCredentialsNotice from "../TestCredentialsNotice";

interface Inputs {
  email: string;
  password: string;
}

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const dispatch = useDispatch();
  const [loginUser] = useLoginUserMutation();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmitLogin: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    setError(null);

    try {
      const response = await loginUser({
        email: data.email,
        password: data.password,
      }).unwrap();

      dispatch(loginUserState({ user: response.data }));

      toast.success(response.message);

      if (!response.success) {
        setError("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
        console.error("Error de autenticación:", response.message);
        toast.error(response.message);
        return;
      }

      // Redirección exitosa con manejo de caché
      router.push("/dashboard");
      router.refresh();
    } catch (err) {
      setError("Ocurrió un error inesperado. Por favor, inténtalo más tarde.");
      dispatch(setFailed());
      toast.error("Algo anda mal");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold text-white">SoftInventory</h1>
        <p className="mt-4 text-sm text-gray-300">
          Bienvenid@! inicia sesión para comenzar a gestionar tu negocio
        </p>
      </div>

      {/* Mensaje de error */}
      {error && (
        <div className="p-4 text-sm text-red-500 bg-red-500/10 rounded-lg">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmitLogin)} className="mt-8 space-y-8">
        <div className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Introduce tu correo electrónico"
              {...register("email", {
                required: "El email es requerido",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Email inválido",
                },
              })}
              className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <input
              type="password"
              placeholder="Introduce tu contraseña"
              {...register("password", {
                required: "La contraseña es requerida",
                minLength: {
                  value: 6,
                  message: "Mínimo 6 caracteres",
                },
              })}
              className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>
        </div>
        <div>
          <button
            type="submit"
            disabled={loading}
            className={`group relative w-full flex justify-center py-2.5 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-[#C84D00] hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Procesando...
              </>
            ) : (
              "Iniciar sesión"
            )}
          </button>
        </div>
      </form>
      <TestCredentialsNotice />
    </div>
  );
}
