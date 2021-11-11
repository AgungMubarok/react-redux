import React from 'react'
import { Route, Routes } from 'react-router';

import App from '../screen/App'
import Login from '../screen/Login'

export default function Routs() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}
