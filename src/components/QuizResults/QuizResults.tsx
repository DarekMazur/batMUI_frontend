import { Alert, Card, CardContent, CardMedia, Snackbar, Typography } from '@mui/material';
import { useResults } from '../../lib/hooks/useResults.tsx';
import { calculateFinalScore, calculateRank } from '../../lib/helpers.ts';
import { useContext, useEffect, useState } from 'react';
import { QuizContext } from '../../lib/AppProvides.tsx';
import { theme } from '../../lib/theme.tsx';
import { INewPlayerProps } from '../../lib/types.ts';

const QuizResults = () => {
  const { score, start, end, quizLevel, player } = useContext(QuizContext);
  const playerRank = useResults(calculateRank(score));
  const [isError, setIsError] = useState<boolean>(false);
  const [token, setToken] = useState<string>('');

  let timeMS = end - start;

  if (timeMS > 10 * 60000) {
    timeMS = 10 * 60000;
  }

  const finalScore = calculateFinalScore(score, timeMS, quizLevel as 'easy' | 'normal' | 'hard');

  const newPlayer: INewPlayerProps = {
    username: player as string,
    score: finalScore,
    time: timeMS,
    level: (quizLevel as string).charAt(0).toUpperCase() + (quizLevel as string).slice(1)
  };

  const getCurrentLevel = () => {
    switch (quizLevel) {
      case 'easy':
        return 'łatwym';
      case 'normal':
        return 'normalnym';
      case 'hard':
        return 'trudnym';
      default:
        break;
    }
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/token`)
      .then((response) => {
        if (response && response.status !== 200) {
          setIsError(true);
        }
        return response.json();
      })
      .then((data) => {
        setToken(data);
      });
  }, []);

  useEffect(() => {
    console.log(JSON.stringify(newPlayer));
    if (token) {
      fetch(`${import.meta.env.VITE_API_URL}/api/score`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify(newPlayer)
      })
        .then((response) => {
          if (response && response.status !== 200) {
            setIsError(true);
          }
        })
        .then((data) => console.log(data));
    }
  }, [token]);

  const handleClose = () => {
    setIsError(false);
  };

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
          ({Math.round((score / 10) * 100)}%) na poziomie {getCurrentLevel()}.
        </Typography>
        <Typography variant='body2' component='div'>
          {playerRank.rankDescription}
        </Typography>
      </CardContent>
      <Snackbar open={isError} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity='error' variant='filled' sx={{ width: '100%' }}>
          Nie udało się zapisać wyników...
        </Alert>
      </Snackbar>
    </Card>
  );
};

export default QuizResults;
