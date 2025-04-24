import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl text-center">
        <div className="text-lg text-gray-600 mb-10 space-y-4">
          <p>
            Descubre el fascinante mundo de los fermentos caseros con ferMeili,
            la app que te acompaña paso a paso en la creación de recetas
            naturales, vivas y deliciosas.
          </p>
          <p>
            Crea, guarda y comparte tus recetas favoritas de kombucha, kéfir,
            kimchi, chucrut y mucho más.
          </p>
          <p>
            ¿Listo para empezar una fermentación? Te avisamos justo cuando esté
            lista para disfrutarla.
          </p>
        </div>

        <Link
          href="/ferments"
          className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 text-lg"
        >
          Ver Fermentos
        </Link>
      </div>
    </div>
  );
}
