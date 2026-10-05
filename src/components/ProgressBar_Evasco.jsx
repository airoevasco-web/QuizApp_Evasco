function ProgressBar_Evasco({ currentQuestion, totalQuestions }) {
  const progress = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="progress-container">
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <p>{Math.round(progress)}% Complete</p>
    </div>
  );
}

export default ProgressBar_Evasco;