import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

const styles = {
  root: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      flexWrap: "wrap",
      padding: 1.5,
  },
};

const TVShowHeader = ({ name, currentPageShow, setCurrentPageShow }) => {

  const handleGoBack = () => {
    setCurrentPageShow((prevCurrentPageShow) => prevCurrentPageShow -1);
};

const handleGoForward = () => {
    setCurrentPageShow((prevCurrentPageShow) => prevCurrentPageShow +1);
};
  
  return (
    <Paper component="div" sx={styles.root}>
      <IconButton disabled={currentPageShow===1} aria-label="go back" onClick={handleGoBack}>
        <ArrowBackIcon color={currentPageShow===1 ? "disabled" : "primary"} fontSize="large" />
      </IconButton>

      <Typography variant="h4" component="h3">
        {name}
      </Typography>

      <IconButton disabled={currentPageShow===10} aria-label="go forward" onClick={handleGoForward}>
        <ArrowForwardIcon color={currentPageShow===10 ? "disabled" : "primary"} fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default TVShowHeader;
