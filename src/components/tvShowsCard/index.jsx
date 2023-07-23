import React, { useContext  } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png'
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { MoviesContext } from "../../contexts/moviesContext";

const styles = {
    card: { maxWidth: 345 },
    media: { height: 500 },
    avatar: {
        backgroundColor: "rgb(255, 0, 0)",
    },
};

export default function TVShowCard({ tvshow, action }) {
    const { favourites, addToFavourites } = useContext(MoviesContext);

    if (favourites.find((id) => id === tvshow.id)) {
        tvshow.favourite = true;
    } else {
        tvshow.favourite = false
    }

    return (
        <Card sx={styles.card}>
            <CardHeader
                sx={styles.header}
                avatar={
                    tvshow.favourite ? (
                        <Avatar sx={styles.avatar}>
                            <FavoriteIcon />
                        </Avatar>
                    ) : null
                }
                title={
                    <Typography variant="h5" component="p">
                        {tvshow.title}{" "}
                    </Typography>
                }
            />
            <CardMedia
                sx={styles.media}
                image={
                    tvshow.poster_path
                        ? `https://image.tmdb.org/t/p/w500/${tvshow.poster_path}`
                        : img
                }
            />
            <CardContent>
                <Grid container>
                    <Grid item xs={6}>
                        <Typography variant="h6" component="p">
                            <CalendarIcon fontSize="small" />
                            {tvshow.release_date}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h6" component="p">
                            <StarRateIcon fontSize="small" />
                            {"  "} {tvshow.vote_average}{" "}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions disableSpacing>
                {/* {action(tvshow)} */}
                <Button variant="outlined" size="medium" color="primary">
                    <Link to={`/tvshow/${tvshow.id}`}>
                        <Button variant="outlined" size="medium" color="primary">
                            More Info ...
                        </Button>
                    </Link>
                </Button>
            </CardActions>
        </Card>
    );
}