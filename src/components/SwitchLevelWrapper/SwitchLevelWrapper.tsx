import { Box, Button } from '@mui/material';
import { MouseEvent, useContext, useEffect, useState } from 'react';
import { theme } from '../../lib/theme.tsx';
import { QuizContext } from '../../lib/AppProvides.tsx';

const styledButton = {
  fontFamily: '"Russo One", sans-serif;',
  width: '10rem',
  height: '3rem',
  m: '1rem 1.2rem',
  '&.active': {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText
  }
};

const SwitchLevelWrapper = () => {
  const context = useContext(QuizContext);

  const [level, setLevel] = useState<null | string>(context.quizLevel || null);

  useEffect(() => {
    context.setLevel(level);
  }, [level, context]);

  const handleChoseLevel = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    document.querySelectorAll('.level').forEach((el) => {
      if (el.classList === target.classList) {
        el.classList.toggle('active');
      } else {
        el.classList.remove('active');
      }
    });

    setLevel(document.querySelector('.active')?.id || null);
  };

  return (
    <Box>
      <Button
        component={'button'}
        variant='contained'
        type='button'
        sx={styledButton}
        onClick={(e: MouseEvent<HTMLButtonElement>) => handleChoseLevel(e)}
        id='easy'
        className={'level'}
      >
        Łatwy
      </Button>
      <Button
        component={'button'}
        variant='contained'
        type='button'
        sx={styledButton}
        onClick={(e: MouseEvent<HTMLButtonElement>) => handleChoseLevel(e)}
        id='normal'
        className={'level'}
      >
        Normalny
      </Button>
      <Button
        component={'button'}
        variant='contained'
        type='button'
        sx={styledButton}
        onClick={(e: MouseEvent<HTMLButtonElement>) => handleChoseLevel(e)}
        id='hard'
        className={'level'}
      >
        Trudny
      </Button>
    </Box>
  );
};

export default SwitchLevelWrapper;
