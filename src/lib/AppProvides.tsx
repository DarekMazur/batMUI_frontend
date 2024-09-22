import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme.tsx';
import { createContext, ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../components/Footer/Footer.tsx';
import Header from '../components/Header/Header.tsx';
import { IContextProps } from './types.ts';
import { useStore } from './hooks/useStore.tsx';

export const initData: IContextProps = {
  quizLevel: null,
  player: null,
  score: 0,
  start: 0,
  end: 0,
  endQuiz: false
};

export const QuizContext = createContext(initData);

const AppProvides = ({ children }: { children: ReactElement }) => {
  const store = useStore();

  return (
    <ThemeProvider theme={theme}>
      <QuizContext.Provider value={store}>
        <BrowserRouter>
          <CssBaseline />
          <Header />
          {children}
          <Footer />
        </BrowserRouter>
      </QuizContext.Provider>
    </ThemeProvider>
  );
};

export default AppProvides;
