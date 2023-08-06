import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import Grid from "@mui/material/Grid";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import ActorList from "../actorList";
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

function ActorListPageTemplate({
  actors,
  title,
  action,
  currentPage,
  setCurrentPage,
}) {
  const [nameFilter, setNameFilter] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [sortByTitle, setSortByTitle] = useState(false);

  const handleChange1 = (event, value) => {
    setCurrentPage(value);
  };

  let displayedActors = actors.filter((a) => {
    return a.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
  });

  if (sortByTitle) {
    if (sortByTitle === "Sort alphabetically from A-Z") {
      displayedActors.sort((a, b) => (a.title > b.title ? 1 : -1));
    } else if (sortByTitle === "Sort alphabetically from Z-A") {
      displayedActors.sort((a, b) => (a.title < b.title ? 1 : -1));
    }
  }

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else if (type === "sortTitle") setSortByTitle(value);
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
          <ActorList action={action} actors={displayedActors} />
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
          titleFilter={nameFilter}
          sortByTitle={sortByTitle}
        />
      </Drawer>
    </>
  );
}
export default ActorListPageTemplate;
