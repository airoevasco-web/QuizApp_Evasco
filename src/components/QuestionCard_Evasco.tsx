import AnswerOption_Evasco from "./AnswerOption_Evasco";
import type { Question_Evasco } from "../data/questions_Evasco";

interface QuestionCard_EvascoProps {
  question: Question_Evasco;
  selectedAnswer: string;
  onSelectAnswer: (answer: string) => void;
  disabled: boolean;
}

function QuestionCard_Evasco({
  question,
  selectedAnswer,
  onSelectAnswer,
  disabled,
}: QuestionCard_EvascoProps) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-md">
      <h2 className="mb-4 text-xl font-bold text-pink-600">
        Question {question.id}
      </h2>

      <p className="mb-6 text-lg font-medium text-gray-800">
        {question.question}
      </p>

      <div className="space-y-3">
        {question.options.map((option) => (
          <AnswerOption_Evasco
            key={option}
            option={option}
            selectedAnswer={selectedAnswer}
            onSelect={onSelectAnswer}
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
}

export default QuestionCard_Evasco;