import { Container } from '@mui/material';
import { generatePlayers } from '../../../lib/data.ts';
import ResultTable from '../../ResultTable/ResultTable.tsx';

const ScoreBoard = () => {
  const players = generatePlayers().sort((a, b) => b.score - a.score);

  return (
    <Container sx={{ my: 5 }} maxWidth='md'>
      <ResultTable playersList={players} />
    </Container>
  );
};

export default ScoreBoard;
