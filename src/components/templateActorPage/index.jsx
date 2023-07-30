import React from "react";
import ActorHeader from "../headerActor";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { getActorImages } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner';

const styles = {
    gridListRoot: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
    },
    gridList: {
        width: 450,
        height: '100vh',
    },
};

const TemplateActorPage = ({ actor, children }) => {
    const { data , error, isLoading, isError } = useQuery(
        ["actor images", { id: actor.id }],
        getActorImages
    );

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }

    return (
        <>
            <ActorHeader actor={actor} />
            
            <Grid container spacing={5} style={{ padding: "15px" }}>
                <Grid item xs={3}>
                    <div sx={styles.gridListRoot}>
                        <ImageList cols={1}>
                            {actor.map((actor) => (
                                <ImageListItem
                                    key={actor.file_path}
                                    sx={styles.gridListTile}
                                    cols={1}
                                >
                                    <img
                                        src={`https://actor.tmdb.org/t/p/w500/${actor.file_path}`}
                                        alt={actor.poster_path}
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </div>
                </Grid>

                <Grid item xs={9}>
                    {children}
                </Grid>
            </Grid>
        </>
    );
};

export default TemplateActorPage;