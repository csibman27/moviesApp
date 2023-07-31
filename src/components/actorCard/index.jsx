import React, { useContext  } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png'
import { Link } from "react-router-dom";

const styles = {
    card: { maxWidth: 345 },
    media: { height: 500 },
    avatar: {
        backgroundColor: "rgb(255, 0, 0)",
    },
};

export default function ActorCard({ actor, action }) {


    return (
        <Card sx={styles.card}>
            <CardHeader
                sx={styles.header}
                title={
                    <Typography variant="h5" component="p">
                        {actor.name}{" "}
                    </Typography>
                }
            />
             <CardMedia
                sx={styles.media}
                image={
                    actor.profile_path
                        ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                        : img
                }
            />
            <CardContent>
                <Grid container>
                    <Grid item xs={6}>
                        <Typography variant="h6" component="p">
                            <ThumbUpOffAltIcon fontSize="small" color="primary" />
                            {" Popularity "}{actor.popularity}
                        </Typography>
                        
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h6" component="p">
                        {/*   */ }
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions disableSpacing>
                {action(actor)}
                <Button variant="outlined" size="small" color="primary">
                    <Link to={`/actor/${actor.id}`}>
                        <Button variant="outlined" size="small" color="secondary">
                            Actor Bio
                        </Button>
                    </Link>
                </Button>
                {action(actor)}
                <Button variant="outlined" size="small" color="primary">
                    <Link to={`/actor/${actor.id}/movies`}>
                        <Button variant="outlined" size="small" color="primary">
                            Actor Movies
                        </Button>
                    </Link>
                </Button>
            </CardActions>
        </Card>
    );
}