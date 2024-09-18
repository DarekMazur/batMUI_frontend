import { createBrowserRouter } from 'react-router-dom';
import HomeView from '../components/View/Home/Home.tsx';
import Quiz from '../components/View/Quiz/Quiz.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeView />
  },
  {
    path: '/quiz/:quizId',
    element: <Quiz />
  }
]);

export default router;
