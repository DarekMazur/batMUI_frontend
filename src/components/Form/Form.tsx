import { Alert, Box, Button, Snackbar, TextField } from '@mui/material';
import { styledButton, styledForm, styledInput } from './Form.styles.ts';
import { ChangeEvent, MouseEvent, useContext, useState } from 'react';
import { QuizContext } from '../../lib/AppProvides.tsx';

const Form = () => {
  const { quizLevel, player, setQuizPlayer, setStartTime } = useContext(QuizContext);

  const [isWarning, setIsWarning] = useState(false);

  const handleClose = () => {
    setIsWarning(false);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuizPlayer(e.target.value || null);
  };

  const handleStart = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!(player && quizLevel)) {
      setIsWarning(true);
      return;
    }

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
      <Snackbar open={isWarning} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity='warning' variant='filled' sx={{ width: '100%' }}>
          {quizLevel
            ? 'Nie ma się czego wstydzić, podaj jakieś imię...'
            : 'Wiem, że jesteś kozak i chcesz na hardzie, ale musisz nadal wybrać poziom'}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Form;
