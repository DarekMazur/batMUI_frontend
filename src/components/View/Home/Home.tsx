import { Box, Button, Container, Typography } from '@mui/material';
import Form from '../../Form/Form.tsx';

const styledContainer = {
  width: '90%',
  p: '1.5rem 0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '& p': {
    textIndent: '1.5rem',
    my: 2
  }
};

const styledButton = {
  fontFamily: '"Russo One", sans-serif;',
  width: '10rem',
  height: '3rem',
  m: '1rem 1.2rem'
};

const HomeView = () => {
  return (
    <Container sx={styledContainer}>
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
      <Box>
        <Box>
          <Button variant='contained' sx={styledButton}>
            Łatwy
          </Button>
          <Button variant='contained' sx={styledButton}>
            Normalny
          </Button>
          <Button variant='contained' sx={styledButton}>
            Trudny
          </Button>
        </Box>
        <Form />
      </Box>
    </Container>
  );
};

export default HomeView;
