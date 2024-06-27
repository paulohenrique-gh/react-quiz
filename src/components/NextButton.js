import { useQuiz } from "../contexts/QuizContext";

function NextButton({ numQuestions }) {
  const {goToNextQuestion, finishQuiz, answer, index} = useQuiz();

  if (answer === null) return;

  if (index < numQuestions - 1) return (
    <button
      className="btn btn-ui"
      onClick={() => goToNextQuestion()}
    >
      Next
    </button>
  );

  if (index === numQuestions - 1) return (
    <button
      className="btn btn-ui"
      onClick={() => finishQuiz()}
    >
      Finish
    </button>
  );
}

export default NextButton;
