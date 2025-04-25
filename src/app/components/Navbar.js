"use client";
import Link from "next/link";
import { useAuth } from "../contexts/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  console.log("Current user:", user); //eliminar post debugging

  return (
    <nav className="bg-emerald-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-3xl font-bold">
          ferMeiliApp
        </Link>

        <div className="flex items-center space-x-4">
          <Link href="/ferments" className="text-white hover:text-blue-200">
            Fermentos
          </Link>

          {user ? (
            <>
              <Link href="/profile" className="text-white hover:text-blue-200">
                Perfil
              </Link>
              <button
                onClick={logout}
                className="bg-white text-blue-600 hover:bg-blue-100 px-3 py-1 rounded"
              >
                Cerrar Sesión
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="text-white hover:text-blue-200">
                Iniciar Sesión
              </Link>
              <Link
                href="/register"
                className="bg-white text-blue-600 hover:bg-blue-100 px-3 py-1 rounded"
              >
                Registrarse
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
