import React from "react";
import PageTemplate from '../components/templateMovieListPage'
import {getUpcomingMovies} from "../api/tmdb-api";
import {useQuery} from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";


const TvSeriesPage = (props) => {
    const { data, error, isLoading, isError } = useQuery("series", getTvSeries);

    if (isLoading) {
        return <Spinner />;
    }
    if (isError) {
        return <h1>{error.message}</h1>;
    }

    const movies = data ? data.results : [];

    return (
        <PageTemplate
            title="TV Series"
            movies={movies}
            action={(movie) => {
                return <AddToFavouritesIcon movie={movie} />
                       
                 
            }}
        />
    );
};
export default TvSeriesPage;
