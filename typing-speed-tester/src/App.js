import React, { useState, useEffect } from 'react';
import TypingBox from './components/TypingBox';
import Timer from './components/Timer';
import Stats from './components/Stats';
import './App.css';
import paragraphs from './paragraphs';

const getRandomParagraph = () => {
  const randomIndex = Math.floor(Math.random() * paragraphs.length);
  return paragraphs[randomIndex];
};

const App = () => {
  const [timeLeft, setTimeLeft] = useState(60);
  const [typed, setTyped] = useState('');
  const [started, setStarted] = useState(false);
  const [theme, setTheme] = useState('light');
  const [paragraph, setParagraph] = useState(getRandomParagraph());

  // Track typing completion
  useEffect(() => {
    if (typed === paragraph) {
      setStarted(false); // Stop the timer
    }
  }, [typed, paragraph]);

  const restart = () => {
    setTyped('');
    setTimeLeft(60);
    setStarted(false);
    setParagraph(getRandomParagraph());
  };

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="container">
      <h1>Typing Speed Tester</h1>
      <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} started={started} />
      <TypingBox
        paragraph={paragraph}
        typed={typed}
        setTyped={setTyped}
        setStarted={setStarted}
        timeLeft={timeLeft}
      />
      <Stats typed={typed} paragraph={paragraph} timeLeft={timeLeft} />
      <div className="buttons">
        <button className="btn" onClick={restart}>Restart</button>
        <button className="btn toggle" onClick={toggleTheme}>
          Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div>
    </div>
  );
};

export default App;
