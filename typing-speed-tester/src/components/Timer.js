import { useEffect } from 'react';

const Timer = ({ timeLeft, setTimeLeft, started }) => {
  useEffect(() => {
    if (started && timeLeft > 0) {
      const interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [started, timeLeft]);

  return <h2>Time Left: {timeLeft}s</h2>;
};

export default Timer;
