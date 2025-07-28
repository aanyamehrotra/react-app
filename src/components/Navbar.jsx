import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(prev => !prev)

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav>
      <div className="logo">ScoreQuest</div>

      <div className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu" role="button" tabIndex={0}>
        <span />
        <span />
        <span />
      </div>

      <ul className={menuOpen ? 'open' : ''}>
        <li><NavLink to="/" end activeClassName="active" onClick={closeMenu}>Home</NavLink></li>
        <li><NavLink to="/quiz" activeClassName="active" onClick={closeMenu}>Quiz</NavLink></li>
        <li><NavLink to="/leaderboard" activeClassName="active" onClick={closeMenu}>Leaderboard</NavLink></li>
        <li><NavLink to="/profile" activeClassName="active" onClick={closeMenu}>Profile</NavLink></li>
        <li><NavLink to="/login" activeClassName="active" onClick={closeMenu}>Login</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar


