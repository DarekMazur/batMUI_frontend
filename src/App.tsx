import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './lib/theme.tsx';
import Header from './components/Molecules/Header/Header.tsx';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <p>Dolor Sit Amet</p>
    </ThemeProvider>
  );
};

export default App;
