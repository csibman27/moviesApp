import React from "react";
import TVShow from "../tvShowsCard";
import Grid from "@mui/material/Grid";

const TVShowList = ({ tvshows, action }) => {
    let tvShowCards = tvshows.map((s) => (
        <Grid key={s.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
            <TVShow key={s.id} tvshow={s} action={action} />
        </Grid>
    ));
    return tvShowCards;
};

export default TVShowList;