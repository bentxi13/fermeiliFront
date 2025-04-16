import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function NewFermentForm({user}) {
  const [fermentName, setFermentName] = useState("test234");
  const [ingredients, setIngredients] = useState("vdfbedberb");
  const [instructions, setInstructions] = useState("eberberber");
  const [fermentationTime, setFermentationTime] = useState("1");

  const handleNameChange= (event)  =>{
    setFermentName(event.target.value);
  }

  const handleIngredientsChange= (event)  =>{
    setIngredients(event.target.value);
  }
  const handleInstructionsChange= (event)  =>{
    setInstructions(event.target.value);
  }
  const handleFermentationTimeChange= (event)  =>{
    setFermentationTime(event.target.value);
  }

  const addFerment = async (event) => {
    event.preventDefault()

    const newFerment = {
      name: fermentName,
      ingredients: ingredients,
      instructions: instructions,
      fermentation_time: fermentationTime,
    };

    try {
      const response = await fetch('http://localhost:3002/ferment_recipes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newFerment),
      });

      if (response.ok) {
        const data = await response.json();
        setFermentName("");
        setIngredients("");
        setInstructions("");
        setFermentationTime("");
      } else {
        console.error('Failed to add ferment');
      }
    } catch (error) {
      console.error('Error adding ferment:', error);
    }
  };


  return (

    <Form className="mx-auto w-50 mt-5">
      <h3>New Ferment</h3>
      <Form.Group className="mb-3 w-50" >
        <Form.Label>Name</Form.Label>
        <Form.Control
        type="text"
        placeholder="Enter ferment name.."
        value={fermentName}
        onChange={handleNameChange}
        />
      </Form.Group>

      <Form.Group className="mb-3 w-50" >
        <Form.Label>Ingredients</Form.Label>
        <Form.Control
        type="text"
        placeholder="Ingredients"
        value={ingredients}
        onChange={handleIngredientsChange}
        />
      </Form.Group>

      <Form.Group className="mb-3 w-50">
        <Form.Label>Instructions</Form.Label>
        <Form.Control type="text"
        placeholder="Instructions.."
        value={instructions}
        onChange={handleInstructionsChange}
        />
      </Form.Group>

      <Form.Group className="mb-3 w-50" >
        <Form.Label>Fermentation time</Form.Label>
        <Form.Control
        type="text"
        placeholder="Fermentation time"
        value={fermentationTime}
        onChange={handleFermentationTimeChange}
        />
      </Form.Group>

      <Button
        variant="success"
        type="submit"
        className="mb-3 "
        onClick={(e) => addFerment(e)}>
        Submit
      </Button>
      <Button href="/ferments" className="mb-3 mx-2" variant="secondary">Volver</Button>
    </Form>
    );


}
export default NewFermentForm;
