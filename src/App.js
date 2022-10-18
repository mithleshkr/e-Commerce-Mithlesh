import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import Header from './components/Header/Header'
import Login from './components/Login/Login'
import Register from './components/register/Register'
import Sidebar from './components/sidebar/Sidebar'

const App = () => {
  return (
    <Router>
    <Header />
    <Routes>
    <Route path='/' exact element={<Dashboard />}/>
    <Route path='/login'  element={<Login />} />
    <Route path='/header' element={<Header />} />
    <Route path='/sidebar' element={<Sidebar />} />
    <Route path='/register' element={<Register />} />
    </Routes>
    </Router>
    
  )
}

export default App