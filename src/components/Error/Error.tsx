import { Container, Paper, Typography } from '@mui/material';
import { theme } from '../../lib/theme.tsx';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { ReactNode } from 'react';

const Error = ({ children }: { children: ReactNode }) => {
  return (
    <Container sx={{ m: 2 }}>
      <Paper
        sx={{
          p: 5,
          minHeight: '10rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 4
        }}
      >
        <Typography color={theme.palette.error.main}>{children}</Typography>
        <ErrorOutlineIcon sx={{ color: theme.palette.error.main, fontSize: 100 }} />
      </Paper>
    </Container>
  );
};

export default Error;
