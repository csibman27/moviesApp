import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import Grid from "@mui/material/Grid";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import TVShowList from "../tvShowCardList";

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


function TVShowPageListTemplate({ tvshows, title, action, currentPageShow, setCurrentPageShow }) {
    const [tvFilter, setTvFilter] = useState("");
    const [genreFilter, setGenreFilter] = useState("0");
    const [drawerOpen, setDrawerOpen] = useState(false);

    const genreId = Number(genreFilter);

    let displayedTVShows = tvshows
        .filter((s) => {
            return s.name.toLowerCase().search(tvFilter.toLowerCase()) !== -1;
        })
        .filter((s) => {
            return genreId > 0 ? s.genre_ids.includes(genreId) : true;
        });

    const handleChange = (type, value) => {
        if (type === "name") setTvFilter(value);
        else setGenreFilter(value);
    };

    return (
        <>
            <Grid container sx={styles.root}>
                <Grid item xs={12}>
                    <Header title={title}
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
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
            >
                <FilterCard
                    onUserInput={handleChange}
                    tvFilter={tvFilter}
                    genreFilter={genreFilter}
                />
            </Drawer>
        </>
    );
}
export default TVShowPageListTemplate;
