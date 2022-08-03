import React from 'react'
import { useContext } from 'react'
import { UserContext } from './context/UserContext'

export const Home = () => {

  const {user} = useContext(UserContext)


  return (
    <>
    <h1>Home</h1> <small>{user?.user}</small>
    <hr/>
    <pre>
      {JSON.stringify(user)}
    </pre>
    </>
  )
}
