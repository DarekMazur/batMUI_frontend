import { Box, Button, TextField } from '@mui/material';
import { styledButton, styledForm, styledInput } from './Form.styles.ts';
import { ChangeEvent, MouseEvent, useContext } from 'react';
import { QuizContext } from '../../lib/AppProvides.tsx';

const Form = () => {
  const { quizLevel, player, setQuizPlayer, setStartTime } = useContext(QuizContext);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuizPlayer(e.target.value || null);
  };

  const handleStart = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setStartTime(Date.now());
  };

  return (
    <Box component='form' sx={styledForm}>
      <TextField
        label={'Nick/Imię'}
        variant='filled'
        sx={styledInput}
        onChange={handleInputChange}
      />
      <Button
        disabled={!(player && quizLevel)}
        variant='contained'
        type='submit'
        sx={styledButton}
        onClick={handleStart}
      >
        Start
      </Button>
    </Box>
  );
};

export default Form;
