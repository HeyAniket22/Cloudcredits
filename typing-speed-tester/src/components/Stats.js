const Stats = ({ typed, paragraph, timeLeft }) => {
    const words = typed.trim().split(/\s+/).length;
    const characters = typed.length;
  
    const correctChars = typed.split('').filter((char, idx) => char === paragraph[idx]).length;
    const accuracy = typed.length ? Math.round((correctChars / typed.length) * 100) : 0;
  
    const timeSpent = 60 - timeLeft;
    const wpm = timeSpent > 0 ? Math.round((words / timeSpent) * 60) : 0;
    const cpm = timeSpent > 0 ? Math.round((characters / timeSpent) * 60) : 0;
  
    return (
      <div className="stats">
        <p>WPM: {wpm}</p>
        <p>CPM: {cpm}</p>
        <p>Accuracy: {accuracy}%</p>
      </div>
    );
  };
  
  export default Stats;
  