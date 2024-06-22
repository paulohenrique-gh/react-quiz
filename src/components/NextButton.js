function NextButton({ dispatch, answer }) {
  if (answer === null) return;

  return (
    <div
      className="btn btn-ui"
      onClick={() => dispatch({ type: "nextQuestion" })}
    >
      Next
    </div>
  );
}

export default NextButton;
