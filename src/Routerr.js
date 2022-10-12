import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Checklist } from './pages/Checklist'
import { Login } from './pages/Login'
import { Register } from './pages/Register'

export const Routerr = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="register" element={<Register/>} />
          <Route path="checklist" element={<Checklist/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
