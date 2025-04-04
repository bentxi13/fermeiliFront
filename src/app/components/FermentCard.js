'use client'

import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function FermentCard() {
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

    <div>
      <h1 className='text-center my-5'>Ferments available</h1>
      <div className="d-flex flex-wrap p-3 w-100 justify-content-around">
        {data.map((ferment) => (
          <Card key={ferment.id} className='card m-1 d-flex flex-wrap w-25 border-2 border-success p-2'>
            <div className="d-flex align-items-center me-4">
              <div className="me-4 d-flex flex-column justify-content-center align-items-center justify-content-center col-8 p-2">

                <Card.Title className='text-center my-3'>{ferment.name}</Card.Title>
                <Card.Text>
                  <span className='fw-bold'>Ingredients:</span> {ferment.ingredients}
                </Card.Text>
                <Card.Text>
                  <span className='fw-bold'>Ferment time:</span> {ferment.fermentation_time} dias
                </Card.Text>

              </div>
              <div className="d-flex flex-column justify-content-center align-items-center col-4">
                <Button  className="my-3" variant="outline-success">Ver</Button>
                <Card.Img   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREBQwZzEfwRfq_u8D0XiEpqVUIRwsZjG2HHg&s" />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>

  );

}
