import { useQuiz } from "../contexts/QuizContext";

function FinishScreen({ maxPossiblePoints }) {
  const {points, highscore, restartQuiz} = useQuiz();

  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) {
    emoji = "🎖️";
  } else if (percentage >= 80 && percentage < 100) {
    emoji = "🥳";
  } else if (percentage >= 50 && percentage < 80) {
    emoji = "🙃";
  } else if (percentage >= 0 && percentage < 50) {
    emoji = "🤔";
  } else if (percentage === 0) {
    emoji = "🤦‍♂️";
  }

  return (
    <>
      <p className="result">
        <span>{emoji}</span>You scored{" "}
        <strong>
          {points} out of {maxPossiblePoints} ({Math.ceil(percentage)}%)
        </strong>
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => restartQuiz()}
      >
        Restart quiz
      </button>
    </>
  );
}

export default FinishScreen;
