import {
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow
} from '@mui/material';
import { StyledTableCell, StyledTableRow } from '../ResultTable/ResultTable.style.ts';

const LoadingMockup = ({ isOpen }: { isOpen?: boolean }) => {
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
            {[1, 2, 3, 4, 5].map((_el, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component='th' scope='row'>
                  {index + 1}
                </StyledTableCell>
                <StyledTableCell align='right'>
                  <Skeleton />
                </StyledTableCell>
                <StyledTableCell align='right'>
                  <Skeleton />
                </StyledTableCell>
                <StyledTableCell align='right'>
                  <Skeleton />
                </StyledTableCell>
                {isOpen ? (
                  <StyledTableCell align='right'>
                    <Skeleton />
                  </StyledTableCell>
                ) : null}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component='div'
        count={100}
        rowsPerPage={5}
        page={0}
        onPageChange={() => {}}
        onRowsPerPageChange={() => {}}
        labelRowsPerPage='Wyników na stronę'
      />
    </>
  );
};

export default LoadingMockup;
