import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Layout from './Components/Layout'
import MainPage from './Pages/MainPages'


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={< MainPage/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App