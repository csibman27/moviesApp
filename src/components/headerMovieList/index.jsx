import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

const styles = {
    root: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
        marginBottom: 1.5,
    },
};

const Header = ({ title, currentPage, setCurrentPage} ) => {

    const handleGoBack = () => {
        setCurrentPage((prevCurrentPage) => prevCurrentPage -1);
    };
    console.log("set current page log:")
    if (typeof setCurrentPage === 'function') {
        console.log("Yes this is a function")
    } else {
        console.log("NO ITS NOT A FUNCTION!!!!!")
    }

    const handleGoForward = () => {
        setCurrentPage((prevCurrentPage) => prevCurrentPage +1);
    };

    return (
        <Paper component="div" sx={styles.root}>
            <IconButton disabled={currentPage===1} aria-label="go back" onClick={handleGoBack}>
                <ArrowBackIcon color={currentPage===1 ? "disabled" : "primary"} fontSize="large" />
            </IconButton>

            <Typography variant="h4" component="h3">
                {title}
            </Typography>

            <IconButton disabled={currentPage===10} aria-label="go forward" onClick={handleGoForward}>
                <ArrowForwardIcon color={currentPage===10 ? "disabled" : "primary"} fontSize="large" />
            </IconButton>
        </Paper>
    );
};

export default Header;
