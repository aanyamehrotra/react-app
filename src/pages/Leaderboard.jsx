import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Leaderboard.css'  // Create this CSS file for styling

const players = [
  { id: 1, name: 'Alice', score: 95 },
  { id: 2, name: 'Bob', score: 87 },
  { id: 3, name: 'Charlie', score: 78 },
  { id: 4, name: 'Diana', score: 65 },
]

const Leaderboard = () => {
  const sortedPlayers = [...players].sort((a, b) => b.score - a.score)

  return (
    <>
      <Navbar />
      <main className="leaderboard-container">
        <h1>ScoreQuest Leaderboard 🧠</h1>
        <ul className="leaderboard-list">
          {sortedPlayers.map((player, index) => {
            let medalClass = ''
            if (index === 0) medalClass = 'gold'
            else if (index === 1) medalClass = 'silver'
            else if (index === 2) medalClass = 'bronze'

            return (
              <li key={player.id} className={`leaderboard-item ${medalClass}`}>
                <span className="rank">{index + 1}</span>
                <span className="name">{player.name}</span>
                <span className="score">{player.score}</span>
              </li>
            )
          })}
        </ul>
      </main>
      <Footer />
    </>
  )
}

export default Leaderboard
