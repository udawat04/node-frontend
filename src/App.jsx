import React from 'react'

import {BrowserRouter, Route, Routes} from "react-router-dom"
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import AddProduct from './pages/AddProduct'
import ClientPage from './pages/ClientPage'
import Header from './components/Header'


const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/signup' element={<SignupPage/>}/>
      <Route path='/addproduct' element={<AddProduct/>}/>
      <Route path='/show' element={<ClientPage/>}/>
     
    </Routes>

    </BrowserRouter>
  )
}

export default App