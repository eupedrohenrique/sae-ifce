import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Login } from "../pages/Login"
import { Cadastro } from "../pages/Cadastro"

export function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </Router>
  )
}
