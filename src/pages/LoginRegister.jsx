import React, { useState } from 'react'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase' // ✅ `auth` is already initialized in firebase.js
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './LoginRegister.css'

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleChange = e => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const { email, password } = formData

    try {
      if (isLogin) {
        const userCred = await signInWithEmailAndPassword(auth, email, password)
        alert(`Logged in as ${userCred.user.email}`)
        console.log(userCred.user)
      } else {
        const userCred = await createUserWithEmailAndPassword(auth, email, password)
        alert(`Account created for ${userCred.user.email}`)
        console.log(userCred.user)
      }
    } catch (error) {
      alert(`Error: ${error.message}`)
    }
  }

  return (
    <>
      <Navbar />
      <main className="auth-container">
        <div className="auth-card">
          <h2>{isLogin ? 'Login to ScoreQuest' : 'Create an Account'}</h2>
          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required={!isLogin}
                />
              </div>
            )}
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
                minLength={6}
              />
            </div>
            <button type="submit" className="auth-btn">
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
          </form>
          <p className="toggle-text">
            {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
            <button
              type="button"
              className="toggle-btn"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? 'Sign Up' : 'Login'}
            </button>
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default LoginRegister
