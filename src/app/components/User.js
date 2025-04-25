export default async function User({ first_name, last_name, email}) {
    return (
    <div className="d-flex flex-wrap justify-content-center">
      <h1 className="text-center">{first_name} {last_name} </h1>
      <p className="text-center">{email}</p>
    </div>
  )
}
