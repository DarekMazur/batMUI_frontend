import { Paper, Table, TableBody, TableContainer, TableHead, TableRow } from '@mui/material';
import { FC } from 'react';
import { StyledTableCell, StyledTableRow } from './ResultTable.style.ts';

interface IPlayerProps {
  id: string;
  username: string;
  score: number;
  time: number;
  level: string;
}

const ResultTable: FC<{ playersList: IPlayerProps[] }> = ({ playersList }) => {
  const translatedLevel = (level: string | null) => {
    switch (level) {
      case 'Easy':
        return 'Łatwy';
      case 'Normal':
        return 'Normalny';
      case 'Hard':
        return 'Trudny';
      default:
        return null;
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label='customized table'>
        <TableHead>
          <TableRow>
            <StyledTableCell>Pozycja</StyledTableCell>
            <StyledTableCell align='right'>Gracz</StyledTableCell>
            <StyledTableCell align='right'>Wynik</StyledTableCell>
            <StyledTableCell align='right'>Czas</StyledTableCell>
            <StyledTableCell align='right'>Poziom</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {playersList.map((player, index) => (
            <StyledTableRow key={player.id}>
              <StyledTableCell component='th' scope='row'>
                {index + 1}
              </StyledTableCell>
              <StyledTableCell align='right'>{player.username}</StyledTableCell>
              <StyledTableCell align='right'>{player.score}</StyledTableCell>
              <StyledTableCell align='right'>{player.time}</StyledTableCell>
              <StyledTableCell align='right'>{translatedLevel(player.level)}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ResultTable;
