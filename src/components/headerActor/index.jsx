import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";

const styles = {
    root: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
        padding: 1.5,
    },
};

const ActorHeader = (props) => {
    const actor = props.actor;
    const retrieveValue = JSON.parse(localStorage.getItem("favourites"));

    return (
        <Paper component="div" sx={styles.root}>
            <IconButton aria-label="go back">
                <ArrowBackIcon color="primary" fontSize="large" />
            </IconButton>

            {console.log(retrieveValue)}

            <Typography variant="h4" component="h3">
                {actor.title}{"   "}
                <a href={actor.homepage}>
                    <HomeIcon color="primary"  fontSize="='large"/>
                </a>
                <br />
                <span>{`${actor.tagline}`} </span>
            </Typography>
            <IconButton aria-label="go forward">
                <ArrowForwardIcon color="primary" fontSize="large" />
            </IconButton>
        </Paper>
    );
};

export default ActorHeader;
