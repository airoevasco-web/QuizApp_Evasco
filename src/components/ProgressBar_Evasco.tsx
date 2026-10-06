interface ProgressBar_EvascoProps {
  currentQuestion: number;
  totalQuestions: number;
}

function ProgressBar_Evasco({
  currentQuestion,
  totalQuestions,
}: ProgressBar_EvascoProps) {
  const progress = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="mb-6 rounded-2xl bg-white p-5 shadow-md">
      <div className="mb-2 flex justify-between text-sm font-medium text-gray-600">
        <span>Progress</span>
        <span>{Math.round(progress)}%</span>
      </div>

      <div className="h-3 w-full overflow-hidden rounded-full bg-pink-100">
        <div
          className="h-full rounded-full bg-pink-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

export default ProgressBar_Evasco;