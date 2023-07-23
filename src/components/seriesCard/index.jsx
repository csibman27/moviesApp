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

export default function SeriesCard({ serie, action }) {
    const { favourites, addToFavourites } = useContext(MoviesContext);

    if (favourites.find((id) => id === serie.id)) {
        serie.favourite = true;
    } else {
        serie.favourite = false
    }

    return (
        <Card sx={styles.card}>
            <CardHeader
                sx={styles.header}
                avatar={
                    serie.favourite ? (
                        <Avatar sx={styles.avatar}>
                            <FavoriteIcon />
                        </Avatar>
                    ) : null
                }
                title={
                    <Typography variant="h5" component="p">
                        {serie.title}{" "}
                    </Typography>
                }
            />
            <CardMedia
                sx={styles.media}
                image={
                    serie.poster_path
                        ? `https://image.tmdb.org/t/p/w500/${serie.poster_path}`
                        : img
                }
            />
            <CardContent>
                <Grid container>
                    <Grid item xs={6}>
                        <Typography variant="h6" component="p">
                            <CalendarIcon fontSize="small" />
                            {serie.release_date}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h6" component="p">
                            <StarRateIcon fontSize="small" />
                            {"  "} {serie.vote_average}{" "}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions disableSpacing>
                {action(serie)}
                <Button variant="outlined" size="medium" color="primary">
                    <Link to={`/movies/${serie.id}`}>
                        <Button variant="outlined" size="medium" color="primary">
                            More Info ...
                        </Button>
                    </Link>
                </Button>
            </CardActions>
        </Card>
    );
}