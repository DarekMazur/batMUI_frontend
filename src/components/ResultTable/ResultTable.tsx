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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
    color: theme.palette.common.white
  },
  '&:last-child td, &:last-child th': {
    border: 0
  }
}));

const ResultTable = ({ playersList }) => {
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
