import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Dialog,
  DialogActions,
  DialogTitle,
  List,
  ListItemButton,
  ListItemText,
  Typography
} from '@mui/material';
import { useContext, useEffect, useState, MouseEvent } from 'react';
import { initData, QuizContext } from '../../../lib/AppProvides.tsx';
import { db } from '../../../lib/data.ts';
import { useNavigate, useParams } from 'react-router-dom';
import { styledButton } from '../../Form/Form.styles.ts';
import { theme } from '../../../lib/theme.tsx';

const styledQuitButton = {
  ...styledButton,
  color: theme.palette.error.dark
};

const Quiz = () => {
  const { score, player, quizLevel, setResults, setStartTime, setLevel, setQuizPlayer } =
    useContext(QuizContext);
  const { quizId } = useParams();
  const navigate = useNavigate();

  const [active, setActive] = useState(true);
  const [currentLevel, setCurrentLevel] = useState<string | undefined>();
  const [currentQuestion, setCurrentQuestion] = useState(0);
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

  const questionsList = db.filter(
    (question) => question.level?.toLowerCase() === quizId && !question.isBonus
  );

  const bonusQuestion = db.filter(
    (question) => question.level?.toLowerCase() === quizId && question.isBonus
  );

  useEffect(() => {
    if (score === 10) {
      setCurrentQuestion(11);
      setActive(true);
    }
  }, [score]);

  const answers: number[] = [];

  do {
    const random = Math.floor(Math.random() * 4 + 1);

    if (!answers.includes(random)) {
      answers.push(random);
    }
  } while (answers.length < 4);

  const handleChoseAnswer = (e: MouseEvent<HTMLButtonElement>): void => {
    const event = e.target as HTMLButtonElement;
    setActive(false);

    if (
      event.textContent === questionsList[currentQuestion]?.check ||
      event.textContent === bonusQuestion[0].check
    ) {
      setResults(score + 1);
    }

    if (currentQuestion < 9) {
      setCurrentQuestion(currentQuestion + 1);
      setActive(true);
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

      <Card sx={{ width: 500, my: 2 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={currentQuestion !== 11 ? questionsList[currentQuestion].img : bonusQuestion[0].img}
          title='quiz question cover'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h3' align='center'>
            {currentQuestion !== 11
              ? questionsList[currentQuestion].question.replace('&#39;', "'")
              : bonusQuestion[0].question.replace('&#39;', "'")}
          </Typography>
          <Typography variant='body2' component='div'>
            <List sx={{ width: '100%' }} component='nav'>
              {answers.map((option) => (
                <ListItemButton
                  component='div'
                  disabled={!active}
                  onClick={handleChoseAnswer}
                  key={
                    currentQuestion !== 11
                      ? questionsList[currentQuestion].id + option
                      : bonusQuestion[0].id + option
                  }
                >
                  <ListItemText
                    primary={
                      currentQuestion !== 11
                        ? questionsList[currentQuestion][
                            `ans${option}` as 'ans1' | 'ans2' | 'ans3' | 'ans4'
                          ].replace('&#39;', "'")
                        : bonusQuestion[0][
                            `ans${option}` as 'ans1' | 'ans2' | 'ans3' | 'ans4'
                          ].replace('&#39;', "'")
                    }
                  />
                </ListItemButton>
              ))}
            </List>
          </Typography>
        </CardContent>
      </Card>

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
