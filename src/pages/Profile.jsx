import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Profile.css'  // create this file for styling

const Profile = () => {
  const user = {
    name: 'Aanya Mehrotra',
    email: 'aanya@example.com',
    avatar: 'https://i.pravatar.cc/150?img=12',
    quizzesPlayed: 42,
    totalScore: 3500,
    rank: 15
  }

  return (
    <>
      <Navbar />
      <main className="profile-container">
        <div className="profile-card">
          <img src={user.avatar} alt="User Avatar" className="profile-avatar" />
          <h2 className="profile-name">{user.name}</h2>
          <p className="profile-email">{user.email}</p>

          <div className="profile-stats">
            <div className="stat">
              <h3>{user.quizzesPlayed}</h3>
              <p>Quizzes Played</p>
            </div>
            <div className="stat">
              <h3>{user.totalScore}</h3>
              <p>Total Score</p>
            </div>
            <div className="stat">
              <h3>#{user.rank}</h3>
              <p>Rank</p>
            </div>
          </div>

          <button className="edit-profile-btn">Edit Profile</button>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Profile
