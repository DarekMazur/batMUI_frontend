import { CssBaseline } from '@mui/material';
import Header from './components/Header/Header.tsx';
import Footer from './components/Footer/Footer.tsx';
import HomeView from './components/View/Home/Home.tsx';
import AppProvides from './lib/AppProvides.tsx';

const App = () => {
  return (
    <AppProvides>
      <>
        <CssBaseline />
        <Header />
        <HomeView />
        <Footer />
      </>
    </AppProvides>
  );
};

export default App;
