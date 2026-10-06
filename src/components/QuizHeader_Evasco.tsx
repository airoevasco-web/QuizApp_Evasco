interface QuizHeader_EvascoProps {
  currentQuestion: number;
  totalQuestions: number;
  score: number;
}

function QuizHeader_Evasco({
  currentQuestion,
  totalQuestions,
  score,
}: QuizHeader_EvascoProps) {
  return (
    <div className="mb-6 rounded-2xl bg-white p-6 text-center shadow-md">
      <h1 className="mb-2 text-3xl font-bold text-pink-600">
        Quiz App
      </h1>

      <p className="text-gray-600">
        Question {currentQuestion} of {totalQuestions}
      </p>

      <p className="mt-3 text-lg font-semibold text-pink-500">
        Score: {score}
      </p>
    </div>
  );
}

export default QuizHeader_Evasco;