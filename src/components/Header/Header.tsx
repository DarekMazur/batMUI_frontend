import { AppBar, IconButton, Paper, Toolbar, Typography } from '@mui/material';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import HomeIcon from '@mui/icons-material/Home';
import { styledHeader, StyledNavLink } from './Header.styles.ts';

const Header = () => {
  return (
    <>
      <Paper component={'header'} elevation={0} sx={styledHeader}>
        <Typography variant={'h1'}>Jak dobrze znasz Zamaskowanego Krzyżowca?</Typography>
      </Paper>
      <AppBar position='static' component='nav'>
        <Toolbar>
          <IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }}>
            <StyledNavLink to='/' className={({ isActive }) => (isActive ? 'active' : undefined)}>
              <HomeIcon />
            </StyledNavLink>
          </IconButton>
          <IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }}>
            <StyledNavLink to='/board'>
              <LeaderboardIcon />
            </StyledNavLink>
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
