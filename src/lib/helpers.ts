import { MAX_COUNT } from './vars.ts';

export const calculateRank = (score: number) => {
  return score / MAX_COUNT;
};
