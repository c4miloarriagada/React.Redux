import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { Login } from './Login'
import { About } from './About'
import { Navbar } from './Navbar'
import { UserProvider } from './context/UserProvider'

export const Main = () => {
  return (
    <UserProvider>
    <Navbar/>
    <hr/>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='login' element={<Login/>} />
        <Route path='about' element={<About/>} />
        <Route path='/*' element={<Navigate to='/'/>}/>
    </Routes>
    </UserProvider>
  )
}
