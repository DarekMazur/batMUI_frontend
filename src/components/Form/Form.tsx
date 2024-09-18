import { Box, Button, TextField } from '@mui/material';
import { theme } from '../../lib/theme.tsx';

const styledForm = {
  m: '3rem 0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative'
};

const styledButton = {
  fontFamily: '"Russo One", sans-serif;',
  width: '10rem',
  height: '3rem',
  m: '1rem 1.2rem',
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.text.primary,
  alignSelf: 'self-end'
};

const styledInput = {
  backgroundColor: theme.palette.backgroundColorLight?.paper,
  width: '30rem',
  border: 'none',
  fontSize: '1.5rem',
  mb: '3rem',
  '&:-webkit-autofill': {
    WebkitBoxShadow: `0 0 0 100px ${theme.palette.backgroundColorLight?.paper} inset`,
    WebkitTextFillColor: theme.palette.secondary.light
  },
  label: {
    color: theme.palette.secondary.light,
    '&.Mui-focused': {
      color: theme.palette.secondary.light
    }
  },
  '&.Mui-focused': {
    label: { color: theme.palette.secondary.light }
  }
};

const Form = () => {
  return (
    <Box component='form' sx={styledForm}>
      <TextField label={'Nick/Imię'} variant='filled' sx={styledInput} />
      <Button variant='contained' type='submit' sx={styledButton}>
        Start
      </Button>
    </Box>
  );
};

export default Form;
