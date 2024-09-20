import { styled, TableCell, tableCellClasses, TableRow } from '@mui/material';

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    fontSize: 20,
    fontFamily: '"Russo One", sans-serif;'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16
  }
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
    color: `${theme.palette.primary.contrastText}`
  },
  '&:last-child td, &:last-child th': {
    border: 0
  },
  '&.topScore:nth-of-type(1) .MuiTableCell-root': {
    color: theme.palette.success.light,
    fontSize: 20,
    fontWeight: theme.typography.fontWeightBold,
    verticalAlign: 'middle'
  },
  '&.topScore:nth-of-type(2) .MuiTableCell-root': {
    color: theme.palette.success.main,
    fontSize: 18,
    fontWeight: theme.typography.fontWeightBold
  },
  '&.topScore:nth-of-type(3) .MuiTableCell-root': {
    color: theme.palette.success.dark,
    fontSize: 16,
    fontWeight: theme.typography.fontWeightBold
  }
}));
