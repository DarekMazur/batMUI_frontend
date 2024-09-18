import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './lib/theme.tsx';
import Header from './components/Molecules/Header/Header.tsx';
import Footer from './components/Molecules/Footer/Footer.tsx';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <p>Dolor Sit Amet</p>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
