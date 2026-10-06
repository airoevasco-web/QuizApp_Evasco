import { useState } from "react";
import { useNavigate } from "react-router-dom";

import questions_Evasco from "../data/questions_Evasco";

import QuizHeader_Evasco from "../components/QuizHeader_Evasco";
import ProgressBar_Evasco from "../components/ProgressBar_Evasco";
import QuestionCard_Evasco from "../components/QuestionCard_Evasco";

function Quiz_Evasco() {
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [hasAnswered, setHasAnswered] = useState(false);

  const question = questions_Evasco[currentQuestion];

  const handleSelectAnswer = (answer: string) => {
    // Prevent the user from getting another point
    // by clicking an answer more than once.
    if (hasAnswered) {
      return;
    }

    setSelectedAnswer(answer);
    setHasAnswered(true);

    // Update the score immediately.
    if (answer === question.answer) {
      setScore((previousScore) => previousScore + 1);
    }
  };

  const handleNext = () => {
    if (!hasAnswered) {
      alert("Please select an answer first.");
      return;
    }

    if (currentQuestion === questions_Evasco.length - 1) {
      setIsQuizComplete(true);

      navigate("/result", {
        state: {
          score: score,
          totalQuestions: questions_Evasco.length,
        },
      });

      return;
    }

    setCurrentQuestion((previousQuestion) => previousQuestion + 1);
    setSelectedAnswer("");
    setHasAnswered(false);
  };

  return (
    <div className="min-h-screen bg-pink-50 px-4 py-8">
      <div className="mx-auto max-w-3xl">

        <QuizHeader_Evasco
          currentQuestion={currentQuestion + 1}
          totalQuestions={questions_Evasco.length}
          score={score}
        />

        <ProgressBar_Evasco
          currentQuestion={currentQuestion + 1}
          totalQuestions={questions_Evasco.length}
        />

        <QuestionCard_Evasco
          question={question}
          selectedAnswer={selectedAnswer}
          onSelectAnswer={handleSelectAnswer}
          disabled={hasAnswered}
        />

        {!isQuizComplete && (
          <div className="mt-6 text-center">
            <button
              onClick={handleNext}
              className="rounded-xl bg-pink-500 px-8 py-3 font-semibold text-white transition hover:bg-pink-600 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {currentQuestion === questions_Evasco.length - 1
                ? "Finish Quiz"
                : "Next"}
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

export default Quiz_Evasco;

