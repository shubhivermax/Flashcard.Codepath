import { useState } from 'react';
import './Flashcards.css';

const jokes = [
  {
    question: "Why don't scientists trust atoms?",
    answer: "Because they make up everything!"
  },
  {
    question: "What did the ocean say to the beach?",
    answer: "Nothing, it just waved!"
  },
  {
    question: "Why did the scarecrow win an award?",
    answer: "Because he was outstanding in his field!"
  },
  {
    question: "What do you call a fake noodle?",
    answer: "An impasta!"
  },
  {
    question: "How does a penguin build its house?",
    answer: "Igloos it together!"
  },
  {
    question: "Why did the math book look so sad?",
    answer: "Because it had too many problems!"
  },
  {
    question: "What do you call a bear with no teeth?",
    answer: "A gummy bear!"
  },
  {
    question: "Why don't eggs tell jokes?",
    answer: "They'd crack each other up!"
  },
  {
    question: "What do you call a fish with no eyes?",
    answer: "Fsh!"
  },
  {
    question: "Why did the cookie go to the doctor?",
    answer: "Because it was feeling crumbly!"
  }
];

function Flashcards() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % jokes.length);
    setIsFlipped(false);
  };

  return (
    <div className="flashcards-container">
      <div className="flashcards-header">
        <h1>Joke Flashcards</h1>
        <p>Test your sense of humor with these classic jokes!</p>
        <p className="card-count">Card {currentCardIndex + 1} of {jokes.length}</p>
      </div>

      <div 
        className={`flashcard ${isFlipped ? 'flipped' : ''}`} 
        onClick={handleCardClick}
      >
        <div className="flashcard-inner">
          <div className="flashcard-front">
            <h2>Question:</h2>
            <p>{jokes[currentCardIndex].question}</p>
          </div>
          <div className="flashcard-back">
            <h2>Answer:</h2>
            <p>{jokes[currentCardIndex].answer}</p>
          </div>
        </div>
      </div>

      <button className="next-button" onClick={handleNextCard}>
        Next Joke
      </button>
    </div>
  );
}

export default Flashcards; 