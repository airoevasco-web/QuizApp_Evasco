interface AnswerOption_EvascoProps {
  option: string;
  selectedAnswer: string;
  onSelect: (option: string) => void;
  disabled: boolean;
}

function AnswerOption_Evasco({
  option,
  selectedAnswer,
  onSelect,
  disabled,
}: AnswerOption_EvascoProps) {
  const isSelected = selectedAnswer === option;

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={() => onSelect(option)}
      className={`w-full rounded-xl border-2 p-4 text-left font-medium transition ${
        isSelected
          ? "border-pink-500 bg-pink-100 text-pink-700"
          : "border-pink-100 bg-white text-gray-700 hover:border-pink-300 hover:bg-pink-50"
      } ${
        disabled
          ? "cursor-not-allowed opacity-90"
          : "cursor-pointer"
      }`}
    >
      {option}
    </button>
  );
}

export default AnswerOption_Evasco;