import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme.tsx';
import { createContext, ReactElement, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../components/Footer/Footer.tsx';
import Header from '../components/Header/Header.tsx';
import { IContextProps } from './types.ts';

export const initData: IContextProps = {
  quizLevel: null,
  setLevel: () => {},
  player: null,
  setQuizPlayer: () => {},
  score: 0,
  setResults: () => {},
  start: 0,
  end: 0,
  setStartTime: () => {},
  setEndTime: () => {},
  finishQuiz: () => {},
  endQuiz: false
};

export const QuizContext = createContext(initData);

const AppProvides = ({ children }: { children: ReactElement }) => {
  const [quizLevel, setQuizLevel] = useState<string | null>(null);
  const [player, setPlayer] = useState<string | null>(null);
  const [score, setScore] = useState<number>(0);
  const [start, setStart] = useState<number>(0);
  const [end, setEnd] = useState<number>(0);
  const [endQuiz, setEndQuiz] = useState<boolean>(false);

  const setLevel = (level: string | null) => {
    setQuizLevel(level);
  };

  const setQuizPlayer = (playerName: string | null) => {
    setPlayer(playerName);
  };

  const setResults = (results: number) => {
    setScore(results);
  };

  const setStartTime = (startTimeStamp: number) => {
    setStart(startTimeStamp);
  };

  const setEndTime = (endTimeStamp: number) => {
    setEnd(endTimeStamp);
  };

  const finishQuiz = (isFinish: boolean) => {
    setEndQuiz(isFinish);
  };

  return (
    <ThemeProvider theme={theme}>
      <QuizContext.Provider
        value={{
          quizLevel,
          setLevel,
          player,
          setQuizPlayer,
          score,
          setResults,
          start,
          end,
          setStartTime,
          setEndTime,
          finishQuiz,
          endQuiz
        }}
      >
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
