import React from 'react'
import Product from './Product'
import { Route, Routes } from 'react-router-dom'
import Accessories from './Accessories'
// import Home from './Home'

const AllRoutes = () => {
  return (
      <Routes>
            {/* <Route path="/" element={<Home/>} ></Route>  */}
            <Route path="/decks" element={<Product/>} ></Route>
            <Route path="/accessories" element={<Accessories/>} ></Route>
            <Route path="/skatebags" element={<Product/>} ></Route>
            <Route path="/wheels" element={<Product/>} ></Route>
      </Routes>
  )
}

export default AllRoutes
