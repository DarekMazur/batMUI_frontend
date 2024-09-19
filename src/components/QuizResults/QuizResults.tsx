import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useResults } from '../../lib/hooks/useResults.tsx';
import { calculateRank } from '../../lib/helpers.ts';
import { useContext } from 'react';
import { QuizContext } from '../../lib/AppProvides.tsx';

const QuizResults = () => {
  const { score } = useContext(QuizContext);
  const playerRank = useResults(calculateRank(score));

  return (
    <Card sx={{ width: 500, my: 2 }}>
      <CardMedia
        sx={{ height: 300 }}
        image={playerRank.rankImage as string}
        title='quiz results cover'
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='h3' align='center'>
          {playerRank.rankName}
        </Typography>
        <Typography variant='body2' component='div'>
          {playerRank.rankDescription}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default QuizResults;
