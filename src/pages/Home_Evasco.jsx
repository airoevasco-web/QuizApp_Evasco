import { useNavigate } from "react-router-dom";

function Home_Evasco() {
  const navigate = useNavigate();

  const startQuiz = () => {
    navigate("/quiz");
  };

  return (
    <div className="home-page">
      <div className="home-card">
        <h1>Quiz App</h1>

        <p>
          Test your knowledge with this fun multiple-choice quiz.
          Answer the questions and see your final score!
        </p>

        <button onClick={startQuiz}>
          Start Quiz
        </button>
      </div>
    </div>
  );
}

export default Home_Evasco;