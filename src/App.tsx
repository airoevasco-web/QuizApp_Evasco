import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import Quiz_Evasco from "./pages/Quiz_Evasco";
import Result_Evasco from "./pages/Result_Evasco";

function HomePage_Evasco() {
  const navigate = useNavigate();

  const startQuiz = () => {
    navigate("/quiz");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-pink-50 px-4">
      <div className="w-full max-w-xl rounded-3xl bg-white p-8 text-center shadow-lg">
        <h1 className="mb-4 text-4xl font-bold text-pink-600">
          Quiz App
        </h1>

        <p className="mb-8 text-gray-600">
          Test your knowledge with this fun multiple-choice quiz.
          Answer the questions and see your final score!
        </p>

        <button
          type="button"
          onClick={startQuiz}
          className="rounded-xl bg-pink-500 px-8 py-3 font-semibold text-white transition hover:bg-pink-600"
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage_Evasco />} />
        <Route path="/quiz" element={<Quiz_Evasco />} />
        <Route path="/result" element={<Result_Evasco />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;