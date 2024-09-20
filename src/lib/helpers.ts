import { MAX_COUNT } from './vars.ts';

export const calculateRank = (score: number) => {
  return score / MAX_COUNT;
};

export const calculateFinalScore = (
  score: number,
  timeMS: number,
  level: 'easy' | 'normal' | 'hard'
) => {
  const timePerQuestion = ((10 - (score > 10 ? 10 : score)) * 60000 + timeMS) / 10;

  let levelParam = 1;

  switch (level) {
    case 'easy':
      levelParam = 0.8;
      break;
    case 'normal':
      levelParam = 1;
      break;
    case 'hard':
      levelParam = 1.5;
      break;
    default:
      levelParam = 1;
      break;
  }

  const scoreRaw = Math.log(timePerQuestion * levelParam);

  return Math.round(scoreRaw * score);
};

export const timeFormat = (time: number) => {
  const minutes = Math.floor(time / 60000);

  const seconds = Math.floor((time % 60000) / 1000);

  const milliseconds = time % 1000;

  return `${minutes >= 10 ? minutes : '0' + minutes}:${seconds >= 10 ? seconds : '0' + seconds}:${milliseconds >= 100 ? milliseconds : milliseconds >= 10 ? '0' + milliseconds : '00' + milliseconds}ms`;
};
