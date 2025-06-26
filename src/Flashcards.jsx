import { useState } from 'react';
import './Flashcards.css';

const sweTrivia = [
  {
    question: "What is the popular platform for coding interviews and practice problems?",
    answer: "LeetCode"
  },
  {
    question: "What is the popular version control system used by most companies?",
    answer: "Git"
  },
  {
    question: "What is the popular code hosting platform owned by Microsoft?",
    answer: "GitHub"
  },
  {
    question: "What is the popular database query language?",
    answer: "SQL"
  },
  {
    question: "What is the popular JavaScript runtime environment?",
    answer: "Node.js"
  },
  {
    question: "What is the popular package manager for JavaScript?",
    answer: "npm"
  },
  {
    question: "What is the popular frontend framework by Facebook?",
    answer: "React"
  },
  {
    question: "What is the popular backend framework for Python?",
    answer: "Django"
  },
  {
    question: "What is the popular cloud platform by Amazon?",
    answer: "AWS"
  },
  {
    question: "What is the popular containerization platform?",
    answer: "Docker"
  }
];

function Flashcards() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [userGuess, setUserGuess] = useState('');
  const [feedback, setFeedback] = useState(''); // 'correct', 'incorrect', or ''
  const [hasGuessedCorrectly, setHasGuessedCorrectly] = useState(false);

  const currentCard = sweTrivia[currentCardIndex];

  const handleInputChange = (e) => {
    setUserGuess(e.target.value);
    setFeedback('');
  };

  const handleGuessSubmit = (e) => {
    e.preventDefault();
    // Case-insensitive, trimmed match
    if (userGuess.trim().toLowerCase() === currentCard.answer.trim().toLowerCase()) {
      setFeedback('correct');
      setHasGuessedCorrectly(true);
      setIsFlipped(true);
    } else {
      setFeedback('incorrect');
      setHasGuessedCorrectly(false);
      setIsFlipped(false);
    }
  };

  const handleNextCard = () => {
    if (currentCardIndex < sweTrivia.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setIsFlipped(false);
      setUserGuess('');
      setFeedback('');
      setHasGuessedCorrectly(false);
    }
  };

  const handlePrevCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      setIsFlipped(false);
      setUserGuess('');
      setFeedback('');
      setHasGuessedCorrectly(false);
    }
  };

  return (
    <div className="flashcards-container">
      <div className="flashcards-header">
        <h1>SWE Internship Trivia</h1>
        <p>Test your knowledge of popular tools and platforms used in software engineering!</p>
        <p className="card-count">Card {currentCardIndex + 1} of {sweTrivia.length}</p>
      </div>

      <div
        className={`flashcard ${isFlipped ? 'flipped' : ''} ${feedback === 'correct' ? 'correct' : ''} ${feedback === 'incorrect' ? 'incorrect' : ''}`}
        // Only allow manual flip if correct
        onClick={() => hasGuessedCorrectly && setIsFlipped(!isFlipped)}
        style={{ pointerEvents: hasGuessedCorrectly ? 'auto' : 'none' }}
      >
        <div className="flashcard-inner">
          <div className="flashcard-front">
            <h2>Question:</h2>
            <p>{currentCard.question}</p>
          </div>
          <div className="flashcard-back">
            <h2>Answer:</h2>
            <p>{currentCard.answer}</p>
          </div>
        </div>
      </div>

      <form className="guess-form" onSubmit={handleGuessSubmit} autoComplete="off">
        <label htmlFor="guess-input">Your Answer:</label>
        <input
          id="guess-input"
          type="text"
          value={userGuess}
          onChange={handleInputChange}
          disabled={hasGuessedCorrectly}
          className={feedback}
        />
        <button type="submit" disabled={hasGuessedCorrectly || userGuess.trim() === ''}>
          Submit
        </button>
      </form>
      {feedback === 'correct' && <div className="feedback correct">Correct! 🎉</div>}
      {feedback === 'incorrect' && <div className="feedback incorrect">Try again!</div>}

      <div className="nav-buttons">
        <button
          className="nav-button"
          onClick={handlePrevCard}
          disabled={currentCardIndex === 0}
        >
          Previous
        </button>
        <button
          className="nav-button"
          onClick={handleNextCard}
          disabled={currentCardIndex === sweTrivia.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Flashcards; 