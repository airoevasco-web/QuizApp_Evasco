import { useLocation, useNavigate } from "react-router-dom";

import ResultCard_Evasco from "../components/ResultCard_Evasco";

function Result_Evasco() {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    score = 0,
    totalQuestions = 10
  } = location.state || {};

  const retakeQuiz = () => {
    navigate("/quiz");
  };

  const returnHome = () => {
    navigate("/");
  };

  return (
    <div className="result-page">
      <div className="result-container">

        <ResultCard_Evasco
          totalQuestions={totalQuestions}
          correctAnswers={score}
        />

        <div className="result-actions">
          <button onClick={retakeQuiz}>
            Retake Quiz
          </button>

          <button onClick={returnHome}>
            Return Home
          </button>
        </div>

      </div>
    </div>
  );
}

export default Result_Evasco;