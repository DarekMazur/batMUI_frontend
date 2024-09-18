import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { theme } from '../../../lib/theme.tsx';

const HomeView = () => {
  return (
    <Container
      sx={{
        width: '90%',
        p: '1.5rem 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& p': {
          textIndent: '1.5rem',
          my: 2
        }
      }}
    >
      <Typography variant={'h3'} component={'h2'}>
        Zmierz się z Batmanem!
      </Typography>
      <Box>
        <Typography>
          <Typography variant={'bat'}>Batman</Typography>, Człowiek-Nietoperz, Zamaskowany
          Krzyżowiec, Mroczny Rycerz, Strażnik Gotham, Gacek. Postać-legenda. Uznany za największego
          bohatera wszechczasów przez magazyn SFX. Człowiek, któy pomimo braku supermocy (o ile za
          supermoc nie uznać liczby zer na koncie) jest w stanie pokonać najpotężniejszych
          przedstawicieli Universum DC. Dziś nadszedł czas, by sprawdzić swoją wiedzę o
          Człowieku-Nietoperzu. Pytania są podzielone na trzy kategorie - łatwe, normalne i trudne.
          Jednak jeżeli swoje informacje o Mrocznym Rycerzu czerpiesz z filmów, to w Arkham mają już
          przygotowaną celę.
        </Typography>
        <Typography>
          Przed Tobą 10 pytań. Czas rozruszać szare komórki i odpowiedzieć na pytanie - Jak dobrze
          znasz Zamaskowanego Krzyżowca!
        </Typography>
      </Box>
      <Box
        sx={{
          form: {
            m: '3rem 0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative'
          }
        }}
      >
        <Box
          sx={{
            button: {
              fontFamily: '"Russo One", sans-serif;',
              width: '10rem',
              height: '3rem',
              m: '1rem 1.2rem'
            }
          }}
        >
          <Button variant='contained'>Łatwy</Button>
          <Button variant='contained'>Normalny</Button>
          <Button variant='contained'>Trudny</Button>
        </Box>
        <form>
          <TextField
            label={'Nick/Imię'}
            variant='filled'
            sx={{
              backgroundColor: theme.palette.backgroundColorLight?.paper,
              width: '30rem',
              border: 'none',
              fontSize: '1.5rem',
              textAlign: 'center',
              mb: '3rem',
              label: {
                color: theme.palette.secondary.light,
                '&.Mui-focused': {
                  color: theme.palette.secondary.light
                }
              },
              '&.Mui-focused': {
                label: { color: theme.palette.secondary.light }
              }
            }}
          />
          <Button
            variant='contained'
            type='submit'
            sx={{
              fontFamily: '"Russo One", sans-serif;',
              width: '10rem',
              height: '3rem',
              m: '1rem 1.2rem',
              color: theme.palette.text.secondary,
              backgroundColor: theme.palette.text.primary,
              alignSelf: 'self-end'
            }}
          >
            Start
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default HomeView;
