"use client";
import React from "react";
import FermentCard from "../components/FermentCard";
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useRouter } from "next/navigation";


const Page = () => {
  const [data, setData] = useState([]);
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const getFerments = async () => {
      const res = await fetch("http://127.0.0.1:3002/ferment_recipes");
      const json = await res.json();
      setData(json);
    };

    getFerments();
  }, []);

  const handleAddingFerment = () => {
    if (user) {
      router.push("/ferments/new");
    } else {
      router.push("/login");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">

      <h1 className="text-center my-5 text-black font-bold">
        Fermentos Disponibles
      </h1>
      <button
        onClick={handleAddingFerment}
        className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        Crear Fermento
      </button>

      {data.map((ferment) => (
        <FermentCard key={ferment.id} {...ferment} />
      ))}
    </div>
  );
};

export default Page;
