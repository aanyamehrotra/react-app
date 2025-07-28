import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />

      <section className="hero">
        <h1>Welcome to ScoreQuest 🧠</h1>
        <p className="tagline">"Knowledge isn’t power until it’s applied."</p>
        <p className="subtext">Challenge your brain, beat your friends, and rise up the leaderboard. Are you ready?</p>
        <Link to="/quiz" className="start-btn">Start Your Journey</Link>
      </section>

      <section className="features">
        <div className="feature-card">
          <h3>🎯 Play Quizzes</h3>
          <p>Pick from a variety of categories and test your knowledge in a fun way.</p>
        </div>
        <div className="feature-card">
          <h3>🏆 Climb the Ranks</h3>
          <p>Compete with friends and players across the globe on the real-time leaderboard.</p>
        </div>
        <div className="feature-card">
          <h3>💡 Learn & Grow</h3>
          <p>Review answers, learn new facts, and track your performance over time.</p>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <h3>🌐 Global Players</h3>
          <p>Compete with quiz lovers from around the world in real-time.</p>
        </div>
        <div className="feature-card">
          <h3>📊 Performance Tracker</h3>
          <p>Monitor your quiz history, accuracy, and time stats.</p>
        </div>
        <div className="feature-card">
          <h3>🧩 Daily Challenges</h3>
          <p>New quizzes daily to keep your brain sharp and entertained.</p>
        </div>
      </section>

      <section className="quote-banner">
        <p>"The beautiful thing about learning is that nobody can take it away from you." – B.B. King</p>
      </section>

      <section className="reviews-section">
        <h2>What Players Say</h2>
        <div className="reviews">
          <div className="review-card">
            <p>“ScoreQuest is my daily brain workout. Fun, challenging, and addictive!”</p>
            <span>— Ananya M.</span>
          </div>
          <div className="review-card">
            <p>“Love the leaderboard feature. My friends and I compete every evening!”</p>
            <span>— Karan R.</span>
          </div>
          <div className="review-card">
            <p>“Best quiz experience ever. Minimal UI and maximum knowledge!”</p>
            <span>— Tanvi S.</span>
          </div>
        </div>
      </section>

      <section className="cta-footer">
        <h2>Join the Quest, Become the Best</h2>
        <Link to="/quiz" className="start-btn">Start Quiz Now</Link>
      </section>

      <Footer />
    </div>
  )
}

export default Home
