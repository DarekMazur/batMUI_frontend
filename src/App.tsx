import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './lib/theme.tsx';
import Header from './components/Header/Header.tsx';
import Footer from './components/Footer/Footer.tsx';
import HomeView from './components/View/Home/Home.tsx';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <HomeView />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
