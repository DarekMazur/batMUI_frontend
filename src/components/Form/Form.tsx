import { Box, Button, TextField } from '@mui/material';
import { styledButton, styledForm, styledInput } from './Form.styles.ts';

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
