import { useState } from "react";
import { useNavigate } from "react-router-dom";

import questions_Evasco from "../data/questions_Evasco";

import QuizHeader_Evasco from "../components/QuizHeader_Evasco";
import ProgressBar_Evasco from "../components/ProgressBar_Evasco";
import QuestionCard_Evasco from "../components/QuestionCard_Evasco";

function Quiz_Evasco() {
  const navigate = useNavigate();

  // Quiz state
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [isQuizComplete, setIsQuizComplete] = useState(false);

  // Get the current question from the questions array
  const question = questions_Evasco[currentQuestion];

  // Store the student's selected answer
  const handleSelectAnswer = (answer) => {
    setSelectedAnswer(answer);
  };

  // Move to the next question
  const handleNext = () => {
    // Make sure an answer is selected
    if (!selectedAnswer) {
      alert("Please select an answer first.");
      return;
    }

    // Check if the selected answer is correct
    const isCorrect = selectedAnswer === question.answer;

    // Update the score
    const newScore = isCorrect ? score + 1 : score;

    setScore(newScore);

    // Check if this is the last question
    if (currentQuestion === questions_Evasco.length - 1) {
      setIsQuizComplete(true);

      navigate("/result", {
        state: {
          score: newScore,
          totalQuestions: questions_Evasco.length
        }
      });

      return;
    }

    // Move to the next question
    setCurrentQuestion(currentQuestion + 1);

    // Clear the previous answer
    setSelectedAnswer("");
  };

  return (
    <div className="quiz-page">
      <div className="quiz-container">

        <QuizHeader_Evasco
          currentQuestion={currentQuestion + 1}
          totalQuestions={questions_Evasco.length}
        />

        <ProgressBar_Evasco
          currentQuestion={currentQuestion + 1}
          totalQuestions={questions_Evasco.length}
        />

        <QuestionCard_Evasco
          question={question}
          selectedAnswer={selectedAnswer}
          onSelectAnswer={handleSelectAnswer}
        />

        {!isQuizComplete && (
  <button
    className="next-button"
    onClick={handleNext}
  >
    {currentQuestion === questions_Evasco.length - 1
      ? "Finish Quiz"
      : "Next"}
  </button>
)}

      </div>
    </div>
  );
}

export default Quiz_Evasco;