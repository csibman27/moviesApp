import { useState } from "react";
import * as React from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import Grid from "@mui/material/Grid";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import MovieList from "../movieList";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const styles = {
  root: {
    padding: "20px",
  },
  fab: {
    marginTop: 8,
    position: "fixed",
    top: 2,
    right: 2,
  },
};

function MovieListPageTemplate({
  movies,
  title,
  action,
  currentPage,
  setCurrentPage,
}) {
  const [titleFilter, setTitleFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [sortByTitle, setSortByTitle] = useState(false);

  const handleChange1 = (event, value) => {
    setCurrentPage(value);
    console.log("ONLY E", event, value);
  };

  const genreId = Number(genreFilter);
  let displayedMovies = movies
    .filter((m) => {
      return m.title.toLowerCase().search(titleFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    });

  if (sortByTitle) {
    displayedMovies.sort((a, b) => (a.title > b.title ? 1 : -1));
    // in here if (sortByTitle === 'Sort alphabetically by first') {
    //  displayedMovies.sort((a, b) => (a.title > b.title ? 1 : -1));
  
    //console.log(sortByTitle)
  }

  const handleChange = (type, value) => {
    if (type === "title") setTitleFilter(value);
    else if (type === "sortTitle") setSortByTitle(value);
    else setGenreFilter(value);
  };

  return (
    <>
      <Grid container sx={styles.root}>
        <Grid item xs={12}>
          <Header
            title={title}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </Grid>
        <Grid item container spacing={5}>
          <MovieList action={action} movies={displayedMovies} />
        </Grid>
      </Grid>
      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        sx={styles.fab}
      >
        Filter
      </Fab>
      <Stack spacing={2}>
        <Typography>Page: {currentPage}</Typography>
        <Pagination count={10} page={currentPage} onChange={handleChange1} />
      </Stack>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <FilterCard
          onUserInput={handleChange}
          titleFilter={titleFilter}
          genreFilter={genreFilter}
          sortByTitle={sortByTitle}
        />
      </Drawer>
    </>
  );
}
export default MovieListPageTemplate;
