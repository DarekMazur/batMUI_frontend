import { Paper, Typography } from '@mui/material';
import { theme } from '../../../lib/theme.tsx';
import FooterCover from '../../../assets/footer.jpg';

const styledFooter = {
  p: '1.5rem 0',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  background: `url(${FooterCover}) no-repeat center center/cover`,
  '&::before': {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    content: '""',
    backgroundColor:
      theme.palette.backgroundColorLight?.default || theme.palette.background.default,
    opacity: '0.7'
  },
  '& p': {
    m: '0',
    p: 0,
    zIndex: '1'
  }
};

const Footer = () => {
  return (
    <Paper component={'header'} elevation={0} sx={styledFooter}>
      <Typography>
        Postać{' '}
        <Typography variant={'bat'} component={'span'}>
          Batmana
        </Typography>{' '}
        stworzył Bob Kane
      </Typography>
      <Typography>2024 &copy; DM</Typography>
    </Paper>
  );
};

export default Footer;
