import { useEffect, useState } from 'react'
import './App.css'
import useCrud from './hooks/useCrud.js'
import FormUser from './components/FormUser.jsx'
import UserCard from './components/UserCard.jsx'

function App() {

  const [userEdit, setuserEdit] = useState()
  
  const BASEURL = 'https://users-crud.academlo.tech'

  const [ users, getUser, createUser, deleteUser, updateUser ] = useCrud(BASEURL)

  useEffect(() => {
  getUser('/users/')
  }, [])
  
  console.log(users)
  return (
<div>
    <h1>User CRUD</h1>
    <FormUser 
    createUser={createUser}
    userEdit={userEdit}
    updateUser={updateUser}
    setuserEdit={setuserEdit}/>
    <div>
      {
        users?.map(user => (
          <UserCard 
          key={user.id}
          user={user}
          deleteUser={deleteUser}
          setuserEdit={setuserEdit}
          />
        ))
      }
    </div>
</div>
  )
}

export default App
