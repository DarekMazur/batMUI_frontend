import { styled } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Hero from '../../assets/hero.jpg';
import { theme } from '../../lib/theme.tsx';

export const StyledNavLink = styled(NavLink)(({ theme }) => ({
  color: theme.palette.secondary.main,
  '&.active': {
    color: theme.palette.secondary.contrastText,
    borderBottom: `0.2rem solid ${theme.palette.secondary.contrastText}`
  }
}));

export const styledHeader = {
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
