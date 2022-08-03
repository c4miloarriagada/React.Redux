import React from 'react'
import { useContext } from 'react'
import { UserContext } from './context/UserContext'

export const Login = () => {

  const {user, setUser} = useContext(UserContext)



  return (
    <>
    <h1>Login</h1>
    <hr/>
    <pre>{JSON.stringify(user)}</pre>
    <button 
    className='btn btn-primary'
    onClick={()=> setUser({id: 123, user: 'camilo', email: 'dasdsa@.com'}) }
    >
      Establecer Usuario
    </button>
    </>
  )
}
