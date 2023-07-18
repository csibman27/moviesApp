import React, { useState } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {getTvSeries} from "../api/tmdb-api";
import {useQuery} from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";

const TvShowsPage = (props) => {
    const { data, error, isLoading, isError } = useQuery("movies", getTvSeries);

    if (isLoading) {
        return <Spinner />;
    }
    if (isError) {
        return <h1>{error.message}</h1>;
    }

    const tvShows = data ? data.results : [];
    
      return (
        <PageTemplate
          title="Discover TV Shows"
          movies={tvShows}
          action={(tvShow) => {
            return <AddToFavouritesIcon show={tvShow} />;
          }}
          
        />
      );
    };

export default TvShowsPage;