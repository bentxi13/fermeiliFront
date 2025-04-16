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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className='text-center my-5'>Ferments available</h1>
      <Button href="/ferments/new" className='mb-5'>
        Add New Ferment
      </Button>
      {data.map((ferment) => (
        <FermentCard key={ferment.id} {...ferment} />
      ))}
    </div>
  );
}

export default Page;
