import React from 'react'
import {  Routes, Route, Router } from 'react-router-dom'
import Home from './pages/Home/Home'

const App = () => {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>

  )
}

export default App