import React from 'react'
import { BrowserRouter,Router,Routes, Route } from 'react-router-dom'

import Navbar from './Navbar.jsx'
import Products from './Products.jsx'
import Restaurant from './Restaurant.jsx'



export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/products' element={<Products/>}/>
      <Route path='/restaurant' element={<Restaurant/>}/>
      
      </Routes>
      </BrowserRouter>
    </div>
  )
}

