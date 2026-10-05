import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home_Evasco from "./pages/Home_Evasco";
import Quiz_Evasco from "./pages/Quiz_Evasco";
import Result_Evasco from "./pages/Result_Evasco";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Home_Evasco />}
        />

        <Route
          path="/quiz"
          element={<Quiz_Evasco />}
        />

        <Route
          path="/result"
          element={<Result_Evasco />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;