import {useUsers} from '../hooks/useUsers';

const UsersPage = () => {
    const { users, nextPage, prevPage } = useUsers()
    

    return (
    <>
        <h3>Uusuarios</h3>
        <table className="table">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Edad</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td><img src={user.avatar} alt="Avatar" /></td>
                        <td>{user.first_name} {user.last_name}</td>
                        <td>{user.email}</td>
                        <td>{user.id}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <div>
            <button onClick={prevPage} >Prev</button>
            <button onClick={nextPage}>Next</button>
        </div>

    </>
  )
}

export default UsersPage