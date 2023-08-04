import React, { useState } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getMovie, getSimilarMovies, getSimilars } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites';
import { useParams } from "react-router-dom";

const SimilarMoviesPage = (props) => {
    
   
    
    const { data, error, isLoading, isError } = useQuery(["discover", {currentPage: 1}],
    getSimilarMovies
    );

    if (isLoading) {
        return <Spinner />;
    }
    if (isError) {
        return <h1>{error.message}</h1>;
    }

    const movies = data ? data.results : [];

    return (
        <PageTemplate
            title="Similar to id 12"
            movies={movies}
            action={(movie) => {
                return <AddToFavouritesIcon movie={movie} />
            }}
        />
    );
};
export default SimilarMoviesPage;
