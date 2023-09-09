import React, { useState } from 'react';
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Shipment from './components/Shipment'
import './index.css'
import Form from './components/Form'
import Profile from './components/Profile'
import Customer from './components/Customer'
import AdminComponent from './components/AdminComponent';
import AdminLoginForm from './components/AdminLoginForm';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>    
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/shipment' element={<Shipment/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/customer' element={<Customer/>}/>
          <Route path='/form' element={<Form/>}/>
          <Route path='/admin' element={<AdminLoginForm/>}/>
         </Routes>
    </>
  )
}

export default App
