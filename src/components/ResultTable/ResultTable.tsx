import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow
} from '@mui/material';
import { ChangeEvent, FC, useMemo, useState } from 'react';
import { StyledTableCell, StyledTableRow } from './ResultTable.style.ts';
import { timeFormat } from '../../lib/helpers.ts';

interface IPlayerProps {
  id: string;
  username: string;
  score: number;
  time: number;
  level: string;
}

const ResultTable: FC<{ playersList: IPlayerProps[]; isOpen?: boolean }> = ({
  playersList,
  isOpen
}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

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

  const visiblePlayers = useMemo(
    () => [...playersList].slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [page, rowsPerPage]
  );

  const handleChangePage = (_e: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (e: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label='customized table'>
          <TableHead>
            <TableRow>
              <StyledTableCell>Pozycja</StyledTableCell>
              <StyledTableCell align='right'>Gracz</StyledTableCell>
              <StyledTableCell align='right'>Wynik</StyledTableCell>
              <StyledTableCell align='right'>Czas</StyledTableCell>
              {isOpen ? <StyledTableCell align='right'>Poziom</StyledTableCell> : null}
            </TableRow>
          </TableHead>
          <TableBody>
            {visiblePlayers.map((player, index) => (
              <StyledTableRow key={player.id}>
                <StyledTableCell component='th' scope='row'>
                  {index + 1}
                </StyledTableCell>
                <StyledTableCell align='right'>{player.username}</StyledTableCell>
                <StyledTableCell align='right'>{player.score}</StyledTableCell>
                <StyledTableCell align='right'>{timeFormat(player.time)}</StyledTableCell>
                {isOpen ? (
                  <StyledTableCell align='right'>{translatedLevel(player.level)}</StyledTableCell>
                ) : null}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component='div'
        count={playersList.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage='Wyników na stronę'
      />
    </>
  );
};

export default ResultTable;
