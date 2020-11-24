import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import BuildIcon from '@material-ui/icons/Build';
import DeleteIcon from '@material-ui/icons/Delete';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(data, assunto, usuario, status, prioridade, responsavel, editar, deletar) {
  return { data, assunto, usuario, status, prioridade, responsavel, editar, deletar };
}

const rows = [
  createData('data', 'assunto', 'usuario', 'status', 'prioridade', 'responsavel', <BuildIcon/>, <DeleteIcon/>),
  createData('data', 'assunto', 'usuario', 'status', 'prioridade', 'responsavel', <BuildIcon/>, <DeleteIcon/>),
  createData('data', 'assunto', 'usuario', 'status', 'prioridade', 'responsavel', <BuildIcon/>, <DeleteIcon/>),
  createData('data', 'assunto', 'usuario', 'status', 'prioridade', 'responsavel', <BuildIcon/>, <DeleteIcon/>),
  createData('data', 'assunto', 'usuario', 'status', 'prioridade', 'responsavel', <BuildIcon/>, <DeleteIcon/>),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Data</StyledTableCell>
            <StyledTableCell align="right">Assunto</StyledTableCell>
            <StyledTableCell align="right">Criado por</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right">Prioridade</StyledTableCell>
            <StyledTableCell align="right">Responsável</StyledTableCell>
            <StyledTableCell align="right">Ação</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.data}
              </StyledTableCell>
              <StyledTableCell align="right">{row.assunto}</StyledTableCell>
              <StyledTableCell align="right">{row.usuario}</StyledTableCell>
              <StyledTableCell align="right">{row.status}</StyledTableCell>
              <StyledTableCell align="right">{row.prioridade}</StyledTableCell>
              <StyledTableCell align="right">{row.responsavel}</StyledTableCell>
              <StyledTableCell align="right">{row.editar} {row.deletar}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}