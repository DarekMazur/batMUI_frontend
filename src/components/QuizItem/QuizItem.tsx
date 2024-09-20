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

const QuizItem = () => {
  const { score, setResults, setEndTime, finishQuiz } = useContext(QuizContext);
  const { quizId } = useParams();

  const [active, setActive] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState<number | 'bonus'>(0);
  const [checkResults, setCheckResults] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [data, setData] = useState<IQuestionTypes[]>([]);

  const questionsList =
    data &&
    data.filter((question) => question.level?.toLowerCase() === quizId && !question.isBonus);

  const bonusQuestion =
    data && data.filter((question) => question.level?.toLowerCase() === quizId && question.isBonus);

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
          setData(data);
          setIsLoading(false);
        });
    } catch (err) {
      setIsError(true);
      console.log(err);
    }
  }, []);

  useEffect(() => {
    if (currentQuestion === 9) {
      if (score === 10) {
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

  const answers: number[] = [];

  do {
    const random = Math.floor(Math.random() * 4 + 1);

    if (!answers.includes(random)) {
      answers.push(random);
    }
  } while (answers.length < 4);

  const handleChoseAnswer = (e: MouseEvent<HTMLDivElement>): void => {
    const event = e.target as HTMLButtonElement;
    setActive(false);

    if (
      event.textContent === questionsList[currentQuestion as number]?.check ||
      event.textContent === bonusQuestion[0].check
    ) {
      setResults(score + 1);
    }

    if ((currentQuestion as number) < 9) {
      setCurrentQuestion((currentQuestion as number) + 1);
    }

    if (currentQuestion === 9 || currentQuestion === 'bonus') {
      setCheckResults((prevState) => !prevState);
    }
  };

  return (
    <>
      {!isError && data ? (
        <Card sx={{ width: 500, my: 2 }}>
          {isLoading ? (
            <Skeleton variant='rectangular' width={500} height={200} />
          ) : (
            <CardMedia
              sx={{ height: 200 }}
              image={
                currentQuestion !== 'bonus'
                  ? questionsList[currentQuestion].img
                  : bonusQuestion[0].img
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
                    : bonusQuestion[0].question.replaceAll('&#39;', "'")}
                </Typography>
                <Typography variant='body2' component='div'>
                  <List sx={{ width: '100%' }} component='nav'>
                    {answers.map((option) => (
                      <ListItemButton
                        component='div'
                        disabled={!active}
                        onClick={(e: MouseEvent<HTMLDivElement>) => handleChoseAnswer(e)}
                        key={
                          currentQuestion !== 'bonus'
                            ? questionsList[currentQuestion].id + option
                            : bonusQuestion[0].id + option
                        }
                      >
                        <ListItemText
                          primary={
                            currentQuestion !== 'bonus'
                              ? questionsList[currentQuestion][
                                  `ans${option}` as 'ans1' | 'ans2' | 'ans3' | 'ans4'
                                ].replaceAll('&#39;', "'")
                              : bonusQuestion[0][
                                  `ans${option}` as 'ans1' | 'ans2' | 'ans3' | 'ans4'
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
