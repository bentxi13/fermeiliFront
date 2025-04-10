export default async function User() {
  const getUsers = async () => {
    const res = await fetch('http://127.0.0.1:3002/users/')
    return res.json()
  }

  const data = await getUsers()

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {data.map((user) => (
        <div key={user.id} className="card" style={{ width: '18rem', margin: '10px' }}>
          <div className="card-body">
            <h5 className="card-title">{user.first_name}</h5>
            <p className="card-text">{user.email}</p>
            <a href={`/users/${user.id}`} className="btn btn-primary">Ver más</a>
          </div>
        </div>
      ))}
    </div>
  )
}
