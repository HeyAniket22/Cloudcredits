import React from 'react';
import './TypingBox.css';

const TypingBox = ({ paragraph, typed, setTyped, setStarted, timeLeft }) => {
  const handleChange = (e) => {
    if (timeLeft === 60) {
      setStarted(true);
    }
    setTyped(e.target.value);
  };

  const getCharacterClass = (char, idx) => {
    if (idx >= typed.length) return '';
    if (typed[idx] === char) return 'correct';
    return 'incorrect';
  };

  return (
    <div className="typing-box">
      <div className="paragraph-display">
        {paragraph.split('').map((char, idx) => (
          <span key={idx} className={getCharacterClass(char, idx)}>
            {char}
          </span>
        ))}
      </div>
      <textarea
        value={typed}
        onChange={handleChange}
        className="typing-area"
        placeholder="Start typing here..."
      />
    </div>
  );
};

export default TypingBox;
