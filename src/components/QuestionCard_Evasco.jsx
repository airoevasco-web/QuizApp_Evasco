import AnswerOption_Evasco from "./AnswerOption_Evasco";

function QuestionCard_Evasco({
  question,
  selectedAnswer,
  onSelectAnswer
}) {
  return (
    <div className="question-card">
      <h2>Question {question.id}</h2>

      <p className="question-text">
        {question.question}
      </p>

      <div className="answer-list">
        {question.options.map((option, index) => (
          <AnswerOption_Evasco
            key={index}
            option={option}
            selectedAnswer={selectedAnswer}
            onSelect={onSelectAnswer}
          />
        ))}
      </div>
    </div>
  );
}

export default QuestionCard_Evasco;