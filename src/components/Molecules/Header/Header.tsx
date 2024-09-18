import { Paper, Typography } from '@mui/material';
import Hero from '../../../assets/hero.jpg';
import { theme } from '../../../lib/theme.tsx';

const styledHeader = {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  m: '0',
  p: '1rem',
  height: '40vh',
  background: `url(${Hero}) no-repeat center center/cover`,
  '&::before': {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    content: '""',
    backgroundColor: theme.palette.background.default,
    opacity: '0.7'
  },
  h1: {
    m: '0',
    zIndex: '1',
    color: theme.palette.text.primary
  }
};

const Header = () => {
  return (
    <Paper component={'header'} elevation={0} sx={styledHeader}>
      <Typography variant={'h1'}>Jak dobrze znasz Zamaskowanego Krzyżowca?</Typography>
    </Paper>
  );
};

export default Header;
