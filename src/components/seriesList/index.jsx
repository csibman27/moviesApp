import React from "react";
import Movie from "../movieCard";
import Grid from "@mui/material/Grid";

const MovieList = ( {series, action }) => {
    let movieCards = series.map((m) => (
        <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Movie key={m.id} serie={m} action={action} />
        </Grid>
    ));
    return movieCards;
};

export default MovieList;