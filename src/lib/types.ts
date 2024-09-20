import { ReactNode } from 'react';

export interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

export interface IPlayerProps {
  id: string;
  username: string;
  score: number;
  time: number;
  level: string;
}

export interface IQuestionTypes {
  id: string;
  question: string;
  ans1: string;
  ans2: string;
  ans3: string;
  ans4: string;
  check: string;
  isBonus: boolean;
  level: string;
  img: string;
}

export interface IContextProps {
  quizLevel: null | string;
  setLevel: (level: string | null) => void;
  player: null | string;
  setQuizPlayer: (playerName: string | null) => void;
  score: number;
  setResults: (results: number) => void;
  start: number;
  end: number;
  setStartTime: (startTimeStamp: number) => void;
  setEndTime: (endTimeStamp: number) => void;
  finishQuiz: (isFinish: boolean) => void;
  endQuiz: boolean;
}

export type IRankName = 'noob' | 'amateur' | 'normal' | 'advanced' | 'perfect' | 'wayne';

export interface IRankTypes {
  rankName: null | IRankName;
  rankImage: null | string;
  rankDescription: string;
}
