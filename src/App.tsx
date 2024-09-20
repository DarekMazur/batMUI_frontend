import AppProvides from './lib/AppProvides.tsx';
import { Route, Routes } from 'react-router-dom';
import HomeView from './components/View/Home/Home.tsx';
import Quiz from './components/View/Quiz/Quiz.tsx';
import ScoreBoard from './components/View/ScoreBoard/ScoreBoard.tsx';

const App = () => {
  return (
    <AppProvides>
      <Routes>
        <Route path='/' element={<HomeView />} />
        <Route path='quiz/:quizId' element={<Quiz />} />
        <Route path='board' element={<ScoreBoard />} />
      </Routes>
    </AppProvides>
  );
};

export default App;
