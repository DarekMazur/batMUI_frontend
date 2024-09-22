import { useState } from 'react';

export const useStore = () => {
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

  const store = {
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
  };

  return store;
};
