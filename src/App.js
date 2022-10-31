import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cart from './components/Cart/Cart'
import Dashboard from './components/Dashboard/Dashboard'
import Header from './components/Header/Header'
import Kids from './components/Product/Kids/Kids'
import Login from './components/Login/Login'
import Product from './components/Product/Product'
import Register from './components/register/Register'
import Sidebar from './components/sidebar/Sidebar'
import Men from './components/Product/Men/Men'
import Women from './components/Product/Women/Women'

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
    <Route path='/product' element={<Product />} />
    <Route path='/cart' element={<Cart />} />
    <Route path='/men' element={<Men />} />
    <Route path='/women' element={<Women />} />
    <Route path='/kids' element={<Kids />} />
    </Routes>
    </Router>
    
  )
}

export default App