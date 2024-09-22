import {
  Card,
  CardContent,
  CardMedia,
  List,
  ListItemButton,
  ListItemText,
  Skeleton,
  Typography
} from '@mui/material';
import { MouseEvent, useContext, useEffect, useState } from 'react';
import { QuizContext } from '../../lib/AppProvides.tsx';
import { useParams } from 'react-router-dom';
import { IQuestionTypes } from '../../lib/types.ts';
import Error from '../Error/Error.tsx';
import { randomizeList } from '../../lib/helpers.ts';
import { MAX_COUNT } from '../../lib/vars.ts';
import { theme } from '../../lib/theme.tsx';

const QuizItem = () => {
  const { score, setResults, setEndTime, finishQuiz } = useContext(QuizContext);
  const { quizId } = useParams();

  const initQuestion = {
    id: '',
    question: '',
    ans1: '',
    ans2: '',
    ans3: '',
    ans4: '',
    check: '',
    isBonus: false,
    level: '',
    img: ''
  };

  const [active, setActive] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState<number | 'bonus'>(0);
  const [checkResults, setCheckResults] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [data, setData] = useState<IQuestionTypes[]>([]);
  const [questionsList, setQuestionsList] = useState<IQuestionTypes[]>([]);
  const [bonusQuestion, setBonusQuestion] = useState<IQuestionTypes>(initQuestion);

  useEffect(() => {
    if (data.length > 0) {
      setQuestionsList(
        randomizeList(
          data.filter((question) => !question.isBonus),
          MAX_COUNT
        )
      );
      setBonusQuestion(data.filter((question) => question.isBonus)[0]);

      setIsLoading(false);
    }
  }, [data]);

  useEffect(() => {
    try {
      setIsLoading(true);
      fetch(`${import.meta.env.VITE_API_URL}/api/questions`)
        .then((response) => {
          if (response && response.status !== 200) {
            setIsError(true);
          }
          return response.json();
        })
        .then((data) => {
          setData(
            data.filter((question: IQuestionTypes) => question.level?.toLowerCase() === quizId)
          );
        });
    } catch (err) {
      setIsError(true);
      console.log(err);
    }
  }, []);

  useEffect(() => {
    if (currentQuestion === MAX_COUNT - 1) {
      if (score === MAX_COUNT) {
        setCurrentQuestion('bonus');
        setEndTime(Date.now());
      } else {
        setEndTime(Date.now());
        finishQuiz(true);
      }
    } else if (currentQuestion === 'bonus') {
      finishQuiz(true);
    }
  }, [checkResults]);

  useEffect(() => {
    setActive(true);
  }, [currentQuestion]);

  const handleChoseAnswer = (e: MouseEvent<HTMLDivElement>): void => {
    const event = e.target as HTMLButtonElement;
    setActive(false);

    if (
      event.textContent ===
        questionsList[currentQuestion as number]?.check.replaceAll('&#39;', "'") ||
      event.textContent === bonusQuestion.check.replaceAll('&#39;', "'")
    ) {
      setResults(score + 1);
    }

    if ((currentQuestion as number) < MAX_COUNT - 1) {
      setCurrentQuestion((currentQuestion as number) + 1);
    }

    if (currentQuestion === MAX_COUNT - 1 || currentQuestion === 'bonus') {
      setCheckResults((prevState) => !prevState);
    }
  };

  return (
    <>
      {!isError ? (
        <Card
          sx={{
            [theme.breakpoints.down('md')]: { width: '90vw' },
            [theme.breakpoints.up('md')]: { width: 500 },
            my: 2
          }}
        >
          {isLoading ? (
            <Skeleton variant='rectangular' width={500} height={200} />
          ) : (
            <CardMedia
              sx={{ height: 200 }}
              image={
                currentQuestion !== 'bonus' ? questionsList[currentQuestion].img : bonusQuestion.img
              }
              title='quiz question cover'
            />
          )}
          <CardContent>
            {isLoading ? (
              <>
                <Skeleton />
                <Skeleton width='60%' />
                <Skeleton width='60%' />
                <Skeleton width='60%' />
                <Skeleton width='60%' />
              </>
            ) : (
              <>
                <Typography gutterBottom variant='h5' component='h3' align='center'>
                  {currentQuestion !== 'bonus'
                    ? questionsList[currentQuestion].question.replaceAll('&#39;', "'")
                    : bonusQuestion.question.replaceAll('&#39;', "'")}
                </Typography>
                <Typography variant='body2' component='div'>
                  <List sx={{ width: '100%' }} component='nav'>
                    {randomizeList(['ans1', 'ans2', 'ans3', 'ans4'], 4).map((option) => (
                      <ListItemButton
                        component='div'
                        disabled={!active}
                        onClick={(e: MouseEvent<HTMLDivElement>) => handleChoseAnswer(e)}
                        key={
                          currentQuestion !== 'bonus'
                            ? questionsList[currentQuestion].id + option
                            : bonusQuestion.id + option
                        }
                      >
                        <ListItemText
                          primary={
                            currentQuestion !== 'bonus'
                              ? questionsList[currentQuestion][
                                  option as 'ans1' | 'ans2' | 'ans3' | 'ans4'
                                ].replaceAll('&#39;', "'")
                              : bonusQuestion[
                                  option as 'ans1' | 'ans2' | 'ans3' | 'ans4'
                                ].replaceAll('&#39;', "'")
                          }
                        />
                      </ListItemButton>
                    ))}
                  </List>
                </Typography>
              </>
            )}
          </CardContent>
        </Card>
      ) : (
        <Error>Nie można załadować quizu. Spróbuj ponownie później...</Error>
      )}
    </>
  );
};

export default QuizItem;
