import React from 'react';
import Link from 'next/link';

const UserPage = ({ }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-2xl font-bold">Información del Usuario</h1>
      <p className="mt-4 text-lg">Aquí puedes ver la información del usuario:</p>

      <Link href="/" className="mt-4 text-blue-500 hover:underline">
        Volver a la pagina principal
      </Link>
    </div>
  );
}


export default UserPage;
