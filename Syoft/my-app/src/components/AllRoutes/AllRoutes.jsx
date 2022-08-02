import React from 'react'
import {Routes, Route} from "react-router-dom";
import Login from '../Auth/Login';
import Register from '../Auth/Register';
import Navbar from '../Navbar/Navbar';
import Products from '../ProductPage/Products';
export default function AllRoutes() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Products/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
    </div>
  )
}
