import { CssBaseline } from '@mui/material';
import Header from './components/Header/Header.tsx';
import Footer from './components/Footer/Footer.tsx';
import AppProvides from './lib/AppProvides.tsx';
import { RouterProvider } from 'react-router-dom';
import router from './router/router.tsx';

const App = () => {
  return (
    <AppProvides>
      <>
        <CssBaseline />
        <Header />
        <RouterProvider router={router} />
        <Footer />
      </>
    </AppProvides>
  );
};

export default App;
