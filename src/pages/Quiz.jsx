import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Quiz.css';

const Quiz = () => {
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [questions, setQuestions] = useState([]);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timer, setTimer] = useState(15);
  const timerRef = useRef(null);
  const [answerSelected, setAnswerSelected] = useState(false);

  useEffect(() => {
    fetch('https://opentdb.com/api_category.php')
      .then(res => res.json())
      .then(data => setCategories(data.trivia_categories))
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (!selectedCategory) return;

    fetch(`https://opentdb.com/api.php?amount=10&category=${selectedCategory}&type=multiple`)
      .then(res => res.json())
      .then(data => {
        const formatted = data.results.map(q => {
          const answers = [...q.incorrect_answers, q.correct_answer].sort(() => Math.random() - 0.5);
          return { ...q, answers };
        });
        setQuestions(formatted);
        setCurrentQIndex(0);
        setScore(0);
        setShowScore(false);
        setTimer(15);
        setAnswerSelected(false);
      });
  }, [selectedCategory]);

  useEffect(() => {
    if (showScore || questions.length === 0) return;

    timerRef.current = setInterval(() => {
      setTimer(prev => {
        if (prev === 1) {
          clearInterval(timerRef.current);
          handleNextQuestion(false);
          return 15;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [currentQIndex, showScore, questions]);

  const handleAnswerClick = (answer) => {
    if (answerSelected) return;

    setAnswerSelected(true);
    clearInterval(timerRef.current);

    const correct = answer === questions[currentQIndex].correct_answer;
    if (correct) setScore(prev => prev + 1);

    setTimeout(() => {
      handleNextQuestion(true);
    }, 1500);
  };

  const handleNextQuestion = (userAnswered) => {
    setAnswerSelected(false);
    setTimer(15);
    if (currentQIndex + 1 < questions.length) {
      setCurrentQIndex(prev => prev + 1);
    } else {
      setShowScore(true);
    }
  };

  if (!selectedCategory) {
    const filteredCategories = categories.filter(cat =>
      cat.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <>
        <Navbar />
        <div className="quiz-container">
          <h2>Select a Quiz Category</h2>

          <input
            type="text"
            placeholder="Search categories..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="search-bar"
            style={{
              padding: '10px',
              marginBottom: '10px',
              width: '100%',
              maxWidth: '400px',
              border: '1px solid #ccc',
              borderRadius: '4px'
            }}
          />

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="category-select"
          >
            <option value="">--Choose Category--</option>
            {filteredCategories.map(cat => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </select>
        </div>
        <Footer />
      </>
    );
  }

  if (questions.length === 0) {
    return (
      <>
        <Navbar />
        <div className="quiz-container"><p>Loading Questions...</p></div>
        <Footer />
      </>
    );
  }

  if (showScore) {
    return (
      <>
        <Navbar />
        <div className="quiz-container score-section">
          <h2>Quiz Completed!</h2>
          <p>Your Score: {score} / {questions.length}</p>
          <button onClick={() => setSelectedCategory('')} className="restart-btn">Choose Another Quiz</button>
        </div>
        <Footer />
      </>
    );
  }

  const currentQuestion = questions[currentQIndex];

  return (
    <>
      <Navbar />
      <div className="quiz-container">
        <div className="quiz-header">
          <h3 dangerouslySetInnerHTML={{ __html: currentQuestion.question }} />
          <div className="timer">Time Left: {timer}s</div>
        </div>
        <div className="answers">
          {currentQuestion.answers.map((answer, idx) => (
            <button
              key={idx}
              className={`answer-btn ${
                answerSelected
                  ? answer === currentQuestion.correct_answer
                    ? 'correct'
                    : 'incorrect'
                  : ''
              }`}
              onClick={() => handleAnswerClick(answer)}
              disabled={answerSelected}
              dangerouslySetInnerHTML={{ __html: answer }}
            />
          ))}
        </div>
        <div className="quiz-footer">
          <p>Question {currentQIndex + 1} of {questions.length}</p>
          <p>Score: {score}</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Quiz;
