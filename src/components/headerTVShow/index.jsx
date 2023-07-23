import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { useNavigate } from "react-router-dom";

const styles = {
  root: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      flexWrap: "wrap",
      padding: 1.5,
  },
};

const TVShowHeader = (props) => {
  const navigate = useNavigate();
  const classes = useStyles();
  const tvShow = props.tvShow;
  console.log(tvShow);
  return (
    <Paper component="div" className={classes.root}>
      <IconButton aria-label="go back" onClick={() => navigate(-1)}>
        <ArrowBackIcon color="primary" fontSize="large" />
      </IconButton>

      <Typography variant="h4" component="h3">
        {tvShow.name}
        <br />
        <span className={classes.tagLine}>{`   "${tvShow.tagline}"`} </span>
      </Typography>
      <IconButton aria-label="go forward" onClick={() => navigate(1)}>
        <ArrowForwardIcon color="primary" fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default TVShowHeader;
