import FermentCard from './components/FermentCard';
import User from './components/User';

export default async function Page() {

  return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<FermentCard />
      
			<User />

		</div>
  )
}
