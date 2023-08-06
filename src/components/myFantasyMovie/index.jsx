import * as React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const FantasyMovie = ({ fantasyMovie }) => {
  console.log("list", fantasyMovie);
  return (
    <>
      <Typography variant="h5" component="h3">
        Fantasy Movies
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right"> Title</TableCell>
              <TableCell align="right"> Overview </TableCell>
              <TableCell align="right"> Genre </TableCell>
              <TableCell align="right"> Release Date </TableCell>
              <TableCell align="right"> Runtime </TableCell>
              <TableCell align="right"> Production Company </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fantasyMovie.map((m) => (
              <TableRow>
                <TableCell align="left">{m?.title}</TableCell>
                <TableCell align="left">{m?.overview}</TableCell>
                <TableCell align="left">{m?.genre}</TableCell>
                <TableCell align="left">{m?.releaseDate}</TableCell>
                <TableCell align="left">{m?.runtime}</TableCell>
                <TableCell align="left">{m?.companyList}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default FantasyMovie;
