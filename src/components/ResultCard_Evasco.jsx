function ResultCard_Evasco({ totalQuestions, correctAnswers }) {
  const incorrectAnswers = totalQuestions - correctAnswers;

  const percentage = Math.round(
    (correctAnswers / totalQuestions) * 100
  );

  return (
    <div className="result-card">
      <h1>Quiz Complete!</h1>

      <div className="score-display">
        <h2>
          {correctAnswers} / {totalQuestions}
        </h2>

        <p>Final Score</p>
      </div>

      <div className="result-details">
        <p>
          Total Questions:
          <strong> {totalQuestions}</strong>
        </p>

        <p>
          Correct Answers:
          <strong> {correctAnswers}</strong>
        </p>

        <p>
          Incorrect Answers:
          <strong> {incorrectAnswers}</strong>
        </p>

        <p>
          Percentage:
          <strong> {percentage}%</strong>
        </p>
      </div>
    </div>
  );
}

export default ResultCard_Evasco;