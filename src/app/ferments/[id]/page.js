
import React from 'react';
import Button from 'react-bootstrap/Button';


const SpecificFerment = async ({params}) => {

  const res = await fetch(`http://127.0.0.1:3002/ferment_recipes/${params.id}`);
  const json = await res.json();
  const ferments = Array.isArray(json) ? json : [json];



  return (
    <div className='flex flex-col items-center justify-center container mt-5'>
      {ferments.map((ferment) => (
        <div key={ferment.id}>
          <h3 className='mb-4 '>{ferment.name}</h3>
          <p className='mb-4 text-dark'>Instrucciones: {ferment.instructions}</p>
          <p className='mb-4'>Ingredientes: {ferment.ingredients}</p>
          <p className='mb-4'>Tiempo de fermentation: {ferment.fermentation_time}</p>
          <Button  variant="success" href={`/ferments/${ferment.id}`}>
            Editar Fermento
          </Button>
          <Button className='mx-3' variant="success" href={'/ferments'}>
            Todos los fermentos
          </Button>

        </div>
      ))}
    </div>
  );
};

export default SpecificFerment;
