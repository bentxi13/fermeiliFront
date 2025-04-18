// app/components/Navbar.js
"use client";
import Link from "next/link";

export default function Navbar() {
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
          <Link href="/login" className="text-white hover:text-blue-200">
            Iniciar Sesión
          </Link>
          <Link href="/register" className="bg-emerald-100 px-3 py-1 rounded">
            Registrarse
          </Link>
        </div>
      </div>
    </nav>
  );
}
