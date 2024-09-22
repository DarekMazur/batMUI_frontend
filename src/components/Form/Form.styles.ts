import { theme } from '../../lib/theme.tsx';

export const styledForm = {
  m: '3rem 0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative'
};

export const styledButton = {
  fontFamily: '"Russo One", sans-serif;',
  width: '10rem',
  height: '3rem',
  m: '1rem 1.2rem',
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.text.primary,
  alignSelf: 'self-end'
};

export const styledInput = {
  backgroundColor: theme.palette.backgroundColorLight?.paper,
  [theme.breakpoints.up('sm')]: {
    width: '30rem'
  },
  [theme.breakpoints.down('sm')]: {
    width: '80vw'
  },
  border: 'none',
  fontSize: '1.5rem',
  mb: '3rem',
  'input:-webkit-autofill': {
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
