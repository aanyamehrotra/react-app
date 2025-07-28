import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import LoginRegister from './pages/LoginRegister'
import Quiz from './pages/Quiz'
import Leaderboard from './pages/Leaderboard'
import Profile from './pages/Profile'
import './App.css'

const App = () => {
  return (
    <Routes>

        <Route index element={<Home />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="leaderboard" element={<Leaderboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="login" element={<LoginRegister />} />
    </Routes>
  )
}

export default App

