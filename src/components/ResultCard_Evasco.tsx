interface ResultCard_EvascoProps {
  totalQuestions: number;
  correctAnswers: number;
}

function ResultCard_Evasco({
  totalQuestions,
  correctAnswers,
}: ResultCard_EvascoProps) {
  const incorrectAnswers = totalQuestions - correctAnswers;

  const percentage = Math.round(
    (correctAnswers / totalQuestions) * 100
  );

  return (
    <div className="rounded-2xl bg-white p-8 text-center shadow-md">
      <h1 className="mb-6 text-3xl font-bold text-pink-600">
        Quiz Complete!
      </h1>

      <div className="mb-6">
        <h2 className="text-4xl font-bold text-pink-500">
          {correctAnswers} / {totalQuestions}
        </h2>

        <p className="mt-2 text-gray-500">
          Final Score
        </p>
      </div>

      <div className="space-y-3 text-gray-700">
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