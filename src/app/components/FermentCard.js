'use client'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function FermentCard({ name, ingredients, fermentation_time, image }) {
  return (
    <Card className='card m-1 d-flex flex-wrap w-25 border-2 border-success p-2'>
      <div className="d-flex align-items-center me-4">
        <div className="me-4 d-flex flex-column justify-content-center align-items-center justify-content-center col-8 p-2">
          <Card.Title className='text-center my-3'>{name}</Card.Title>
          <Card.Text>
            <span className='fw-bold'>Ingredients:</span> {ingredients}
          </Card.Text>
          <Card.Text>
            <span className='fw-bold'>Ferment time:</span> {fermentation_time} dias
          </Card.Text>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center col-4">
          <Button className="my-3" variant="outline-success">Ver</Button>
          <Card.Img src={image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREBQwZzEfwRfq_u8D0XiEpqVUIRwsZjG2HHg&s"} />
        </div>
      </div>
    </Card>
  );
}
