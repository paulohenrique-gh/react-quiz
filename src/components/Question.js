import Option from "./Option";

function Question({ question }) {
  return (
    <div>
      <h4>{question.question}</h4>

      <div className="options">
        {question.options.map((option, index) => (
          <Option option={option} key={option} isCorrect={index === question.correctOption} />
        ))}
      </div>
    </div>
  );
}

export default Question;
