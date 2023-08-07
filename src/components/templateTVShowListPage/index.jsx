import { useState } from "react";
import * as React from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import Grid from "@mui/material/Grid";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import TVShowList from "../tvShowCardList";
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

function TVShowPageListTemplate({
  tvshows,
  title,
  action,
  currentPageShow,
  setCurrentPageShow,
}) {
  const [tvFilter, setTvFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [sortByTitle, setSortByTitle] = useState(false);

  const handleChange1 = (event, value) => {
    setCurrentPageShow(value);
    //console.log("ONLY E", event, value);
  };

  const genreId = Number(genreFilter);

  let displayedTVShows = tvshows
    .filter((s) => {
      return s.name.toLowerCase().search(tvFilter.toLowerCase()) !== -1;
    })
    .filter((s) => {
      return genreId > 0 ? s.genre_ids.includes(genreId) : true;
    });

  if (sortByTitle) {
    if (sortByTitle === "Sort alphabetically from A-Z") {
      displayedTVShows.sort((a, b) => (a.title > b.title ? 1 : -1));
    } else if (sortByTitle === "Sort alphabetically from Z-A") {
      displayedTVShows.sort((a, b) => (a.title < b.title ? 1 : -1));
    }
  }

  const handleChange = (type, value) => {
    if (type === "name") setTvFilter(value);
    else if (type === "sortTitle") setSortByTitle(value);
    else setGenreFilter(value);
  };

  return (
    <>
      <Grid container sx={styles.root}>
        <Grid item xs={12}>
          <Header
            title={title}
            currentPageShow={currentPageShow}
            setCurrentPageShow={setCurrentPageShow}
          />
        </Grid>
        <Grid item container spacing={5}>
          <TVShowList action={action} tvshows={displayedTVShows} />
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
        <Typography>Page: {currentPageShow}</Typography>
        <Pagination count={10} page={currentPageShow} onChange={handleChange1} />
      </Stack>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <FilterCard
          onUserInput={handleChange}
          tvFilter={tvFilter}
          genreFilter={genreFilter}
          sortByTitle={sortByTitle}
        />
      </Drawer>
    </>
  );
}
export default TVShowPageListTemplate;
