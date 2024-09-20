import { createBrowserRouter } from 'react-router-dom';
import HomeView from '../components/View/Home/Home.tsx';
import Quiz from '../components/View/Quiz/Quiz.tsx';
import ScoreBoard from '../components/View/ScoreBoard/ScoreBoard.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeView />
  },
  {
    path: '/quiz/:quizId',
    element: <Quiz />
  },
  {
    path: '/board',
    element: <ScoreBoard />
  }
]);

export default router;
