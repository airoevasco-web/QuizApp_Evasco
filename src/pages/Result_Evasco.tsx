import { useLocation, useNavigate } from "react-router-dom";

import ResultCard_Evasco from "../components/ResultCard_Evasco";

interface ResultState {
  score: number;
  totalQuestions: number;
}

function Result_Evasco() {
  const location = useLocation();
  const navigate = useNavigate();

  const state = location.state as ResultState | null;

  const score = state?.score ?? 0;
  const totalQuestions = state?.totalQuestions ?? 10;

  const retakeQuiz = () => {
    navigate("/quiz");
  };

  const returnHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-pink-50 px-4 py-8">
      <div className="mx-auto max-w-2xl">
        <ResultCard_Evasco
          totalQuestions={totalQuestions}
          correctAnswers={score}
        />

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button
            onClick={retakeQuiz}
            className="rounded-xl bg-pink-500 px-6 py-3 font-semibold text-white transition hover:bg-pink-600"
          >
            Retake Quiz
          </button>

          <button
            onClick={returnHome}
            className="rounded-xl border-2 border-pink-500 bg-white px-6 py-3 font-semibold text-pink-600 transition hover:bg-pink-50"
          >
            Return Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default Result_Evasco;