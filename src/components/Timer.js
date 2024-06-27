import { useEffect } from "react";
import { useQuiz } from "../contexts/QuizContext";

function Timer() {
  const { finishQuiz, advanceTimer, secondsRemaining } = useQuiz();

  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(() => {
    if (secondsRemaining <= 0) {
      finishQuiz();
      return;
    }

    const id = setInterval(() => {
      advanceTimer();
    }, 1000);

    return () => clearInterval(id);
  }, [finishQuiz, advanceTimer, secondsRemaining]);

  return (
    <div className="timer">
      {minutes.toString().padStart(2, "0")}:
      {seconds.toString().padStart(2, "0")}
    </div>
  );
}

export default Timer;
