import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useResults } from '../../lib/hooks/useResults.tsx';
import { calculateFinalScore, calculateRank } from '../../lib/helpers.ts';
import { useContext } from 'react';
import { QuizContext } from '../../lib/AppProvides.tsx';
import { theme } from '../../lib/theme.tsx';

const QuizResults = () => {
  const { score, start, end, quizLevel } = useContext(QuizContext);
  const playerRank = useResults(calculateRank(score));

  let timeMS = end - start;

  if (timeMS > 10 * 60000) {
    timeMS = 10 * 60000;
  }

  const finalScore = calculateFinalScore(score, timeMS, quizLevel as 'easy' | 'normal' | 'hard');

  return (
    <Card sx={{ width: 500, my: 2 }}>
      <CardMedia
        sx={{ height: 500 }}
        image={playerRank.rankImage as string}
        title='quiz results cover'
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='h3' align='center'>
          Zdobywasz{' '}
          <Typography
            variant='h5'
            component='span'
            sx={{ color: theme.palette.primary.contrastText }}
          >
            {finalScore} punktów
          </Typography>{' '}
          ({Math.round((score / 10) * 100)}%).
        </Typography>
        <Typography variant='body2' component='div'>
          {playerRank.rankDescription}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default QuizResults;
