import { Button, Container, Dialog, DialogActions, DialogTitle, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { initData, QuizContext } from '../../../lib/AppProvides.tsx';
import { useNavigate, useParams } from 'react-router-dom';
import { styledButton } from '../../Form/Form.styles.ts';
import { theme } from '../../../lib/theme.tsx';
import QuizItem from '../../QuizItem/QuizItem.tsx';
import QuizResults from '../../QuizResults/QuizResults.tsx';

const styledQuitButton = {
  ...styledButton,
  color: theme.palette.error.dark
};

const Quiz = () => {
  const {
    player,
    quizLevel,
    setResults,
    setStartTime,
    setLevel,
    setQuizPlayer,
    endQuiz,
    finishQuiz
  } = useContext(QuizContext);
  const { quizId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!quizLevel || !player) {
      navigate('/');
    }
  }, [quizLevel, player]);

  const [currentLevel, setCurrentLevel] = useState<string | undefined>();
  const [modal, setModal] = useState<boolean>(false);

  const levelNameColor = (level: string | null) => {
    if (level === 'easy') {
      return theme.palette.success.dark;
    }

    if (level === 'normal') {
      return theme.palette.warning.dark;
    }

    if (level === 'hard') {
      return theme.palette.error.dark;
    }

    return null;
  };

  const getCurrentLevel = () => {
    switch (quizId) {
      case 'easy':
        setCurrentLevel('łatwym');
        break;
      case 'normal':
        setCurrentLevel('normalnym');
        break;
      case 'hard':
        setCurrentLevel('trudnym');
        break;
      default:
        break;
    }
  };

  const clearStore = () => {
    setResults(initData.score);
    setQuizPlayer(initData.player);
    setLevel(initData.quizLevel);
    setStartTime(initData.start);
    finishQuiz(initData.endQuiz);
  };

  const handleQuit = () => {
    if (endQuiz) {
      console.log('here');
      clearStore();
      navigate('/board');
      return;
    }
    setModal(true);
  };

  const handleConfirmQuit = () => {
    clearStore();
    navigate('/');
  };

  useEffect(() => {
    getCurrentLevel();
  }, [quizLevel]);

  return (
    <Container
      sx={{
        my: 6,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Typography variant='h3' component='h2'>
        BATQUIZ
      </Typography>
      {endQuiz ? null : (
        <>
          <Typography variant='h3' component='p'>
            Witaj,{' '}
            <Typography
              variant='h3'
              component='span'
              sx={{ color: theme.palette.primary.contrastText }}
            >
              {player}
            </Typography>
            !
          </Typography>
          <Typography component='p'>
            Grasz na poziomie{' '}
            <Typography component='span' sx={{ color: levelNameColor(quizLevel) }}>
              {currentLevel ? currentLevel : null}
            </Typography>
          </Typography>
        </>
      )}
      {endQuiz ? <QuizResults /> : <QuizItem />}
      <Button sx={styledQuitButton} onClick={handleQuit}>
        {endQuiz ? 'Zakończ' : 'Przerwij'}
      </Button>
      <Dialog
        open={modal}
        fullWidth
        PaperProps={{
          sx: {
            width: '50%',
            height: 200,
            display: 'flex',
            justifyContent: 'center'
          }
        }}
      >
        <DialogTitle sx={{ textAlign: 'center' }}>Naprawdę się poddajesz?</DialogTitle>
        <DialogActions>
          <Button
            sx={{
              color: theme.palette.error.dark,
              fontFamily: '"Russo One", sans-serif;'
            }}
            onClick={handleConfirmQuit}
          >
            Rezygnuję
          </Button>
          <Button
            sx={{
              fontFamily: '"Russo One", sans-serif;'
            }}
            onClick={() => setModal(false)}
          >
            Gram dalej
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Quiz;
