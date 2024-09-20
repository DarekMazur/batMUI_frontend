import {
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import { generatePlayers } from '../../../lib/data.ts';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover
  },
  '&:last-child td, &:last-child th': {
    border: 0
  }
}));

const ScoreBoard = () => {
  const players = generatePlayers();

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
          {players.map((player, index) => (
            <StyledTableRow key={player.id}>
              <StyledTableCell component='th' scope='row'>
                {index + 1}
              </StyledTableCell>
              <StyledTableCell align='right'>{player.username}</StyledTableCell>
              <StyledTableCell align='right'>{player.score}</StyledTableCell>
              <StyledTableCell align='right'>{player.time}</StyledTableCell>
              <StyledTableCell align='right'>{player.level}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ScoreBoard;
