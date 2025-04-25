'use client'
import React from 'react';
import FermentCard from '../components/FermentCard';
import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';


const Page = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const getFerments = async () => {
      const res = await fetch('http://127.0.0.1:3002/ferment_recipes')
      const json = await res.json()
      setData(json)
    }

    getFerments()
  }, [])

  const deleteFerment = async (id) => {
    try {
      const res = await fetch(`http://127.0.0.1:3002/ferment_recipes/${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        setData((prev) => prev.filter((ferment) => ferment.id !== id));
      } else {
        console.error('Error deleting ferment');
      }
    } catch (err) {
      console.error('Error deleting ferment:', err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-300">
      <h1 className='text-center my-5'>Ferments available</h1>
      <Button href="/ferments/new" className='mb-3' variant="success">
        Add New Ferment
      </Button>
      <div className='flex flex-wrap justify-center'>
        {data.map((ferment) => (
          <FermentCard key={ferment.id} {...ferment} onDelete={deleteFerment} />
        ))}
      </div>
    </div>
  );
}

export default Page;
