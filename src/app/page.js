import Button from 'react-bootstrap/Button';

export default async function Page() {

  return (
		<div className="flex flex-col items-center justify-center min-h-screen py-5 border bg-green-400">
      
      <h1 className="font-mono mb-5">Ferments App</h1>
      <Button className="btn btn-success mb-5" href="/ferments">Ferments list</Button>
      <Button className="btn btn-success" href="/ferments/new">New Ferment</Button>

		</div>
  )
}
