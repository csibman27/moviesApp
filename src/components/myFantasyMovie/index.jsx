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
              <TableCell align="left"> Title</TableCell>
              <TableCell align="left"> Overview </TableCell>
              <TableCell align="left"> Genre </TableCell>
              <TableCell align="left"> Release Date </TableCell>
              <TableCell align="left"> Runtime </TableCell>
              <TableCell align="left"> Production Company </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fantasyMovie.map((m) => (
              <TableRow>
                <TableCell>{m?.title}</TableCell>
                <TableCell>{m?.overview}</TableCell>
                <TableCell>{m?.genre}</TableCell>
                <TableCell>{m?.releaseDate}</TableCell>
                <TableCell>{m?.runtime}</TableCell>
                <TableCell>{m?.productionCompany}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default FantasyMovie;
