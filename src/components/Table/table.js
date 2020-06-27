import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import styles from "./Table.module.css";

export default function Tables({ provinces: { data }, country }) {
  const pro = data;

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
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  const useStyles = makeStyles({
    table: {
      minWidth: 100,
    },
    container: {
      marginTop: 10,
    },
  });

  const classes = useStyles();
  

  if (!data) {
    return "loading...";
  }

 
  return (
    <div className={styles.container}>
      <Typography color="textSecondary" variant="h4" align="center">
        {" "}
        COVID-19 Detail of {country ? country : "Pakistan"}
      </Typography>
      <TableContainer className={classes.container} component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Provinces</StyledTableCell>
              <StyledTableCell align="center">TotalCases</StyledTableCell>
              <StyledTableCell align="center">Recovered</StyledTableCell>
              <StyledTableCell align="center">Deaths</StyledTableCell>
              <StyledTableCell align="center">Active</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pro.map((row) => (
              <StyledTableRow key={row.provinceState}>
                <StyledTableCell component="th" scope="row">
                  {row.provinceState ? row.provinceState : row.countryRegion}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.confirmed}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {" "}
                  {row.recovered}
                </StyledTableCell>
                <StyledTableCell align="center">{row.deaths}</StyledTableCell>
                <StyledTableCell align="center">{row.active}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
