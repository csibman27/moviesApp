import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import SortIcon from "@mui/icons-material/Sort";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { getGenres } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../spinner";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import { Checkbox, FormControlLabel, FormGroup } from "@material-ui/core";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

const styles = {
  root: {
    maxWidth: 355,
  },
  media: { height: 300 },

  formControl: {
    margin: 2,
    minWidth: 250,
    backgroundColor: "rgb(255, 255, 255)",
  },
};

export default function FilterMoviesCard(props) {
  const { data, error, isLoading, isError } = useQuery("genres", getGenres);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const genres = data.genres;
  if (genres[0].name !== "All") {
    genres.unshift({ id: "0", name: "All" });
  }

  const handleUserInput = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value); // NEW
  };

  const handleTextChange = (e, props) => {
    handleUserInput(e, "title", e.target.value);
  };

  const handleGenreChange = (e) => {
    handleUserInput(e, "genre", e.target.value);
  };

  //array of production companies
  const sortList = ['Sort alphabetically by first', 'Sort alphabetically by last' ];

  const handleSortTitleChange = (e) => {
    handleUserInput(e, "sortTitle", e.target.checked);
  };

  return (
    <>
      <Card sx={styles.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h1">
            <MovieFilterIcon fontSize="large" />
            Filter the movies.
          </Typography>
          <TextField
            sx={styles.formControl}
            id="filled-search"
            label="Search field"
            type="search"
            value={props.titleFilter}
            variant="filled"
            onChange={handleTextChange}
          />
          <FormControl sx={styles.formControl}>
            <InputLabel id="genre-label">Genre</InputLabel>
            <Select
              labelId="genre-label"
              id="genre-select"
              value={props.genreFilter}
              onChange={handleGenreChange}
            >
              {genres.map((genre) => {
                return (
                  <MenuItem key={genre.id} value={genre.id}>
                    {genre.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </CardContent>
      </Card>
      <Card sx={styles.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h1">
            <SortIcon fontSize="large" />
            Sort the movies.
          </Typography>
          {/* P */}
          <FormControl sx={styles.formControl}>
            <InputLabel id="sort-label">Sort type</InputLabel>
            <Select
              labelId="sort-label"
              id="sort-select"
              value={props.sortByTitle}
              onChange={handleSortTitleChange}
            >
              {/* {sortList.map((sortTitle) => {
                return (
                  <MenuItem key={sortTitle} value={sortTitle}>
                    {sortTitle}
                  </MenuItem>
                );
              })} */}
              <option value="sort-select">Alphabetically by first</option>
              <option value="sort-label">Alphabetically by last</option>
            </Select>
          </FormControl>
          {/* P */}
        </CardContent>
      </Card>
    </>
  );
}
