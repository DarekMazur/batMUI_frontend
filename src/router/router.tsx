import { createBrowserRouter } from 'react-router-dom';
import HomeView from '../components/View/Home/Home.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeView />
  }
]);

export default router;
