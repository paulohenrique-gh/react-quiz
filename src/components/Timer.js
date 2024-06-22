import { useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {
  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(() => {
    if (secondsRemaining <= 0) {
      dispatch({ type: "finish" });
      return;
    }

    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(id);
  }, [dispatch, secondsRemaining]);

  return (
    <div className="timer">
      {minutes.toString().padStart(2, "0")}:
      {seconds.toString().padStart(2, "0")}
    </div>
  );
}

export default Timer;
