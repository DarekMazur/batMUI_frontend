import { Button, Container, Dialog, DialogActions, DialogTitle, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { initData, QuizContext } from '../../../lib/AppProvides.tsx';
import { useNavigate, useParams } from 'react-router-dom';
import { styledButton } from '../../Form/Form.styles.ts';
import { theme } from '../../../lib/theme.tsx';
import QuizItem from '../../QuizItem/QuizItem.tsx';

const styledQuitButton = {
  ...styledButton,
  color: theme.palette.error.dark
};

const Quiz = () => {
  const { player, quizLevel, setResults, setStartTime, setLevel, setQuizPlayer } =
    useContext(QuizContext);
  const { quizId } = useParams();
  const navigate = useNavigate();

  const [currentLevel, setCurrentLevel] = useState<string | undefined>();
  const [modal, setModal] = useState<boolean>(false);

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

  const handleQuit = () => {
    setModal(true);
  };

  const handleConfirmQuit = () => {
    setResults(initData.score);
    setQuizPlayer(initData.player);
    setLevel(initData.quizLevel);
    setStartTime(initData.start);
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
      <Typography variant='h3' component='p'>
        Witaj, {player}!
      </Typography>
      <Typography component='p'>Grasz na poziomie {currentLevel ? currentLevel : null}</Typography>
      <QuizItem />
      <Button sx={styledQuitButton} onClick={handleQuit}>
        Przerwij
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
