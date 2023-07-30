import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import Grid from "@mui/material/Grid";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import ActorList from "../actorList";

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


function ActorListPageTemplate({ actors, title, action }) {
    const [nameFilter, setTitleFilter] = useState("");
    const [drawerOpen, setDrawerOpen] = useState(false);

    //const genreId = Number(genreFilter);
    let displayedActors = actors
        .filter((a) => {
            return a.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
        });

    const handleChange = (type, value) => {
        if (type === "name") setNameFilter(value);
    };

    return (
        <>
            <Grid container sx={styles.root}>
                <Grid item xs={12}>
                    <Header title={title}
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
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
            >
                <FilterCard
                    onUserInput={handleChange}
                    titleFilter={nameFilter}
                    
                />
            </Drawer>
        </>
    );
}
export default ActorListPageTemplate;
