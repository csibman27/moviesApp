import React, { useState } from "react";
import PageTemplate from '../components/templateSeriesListPage'
import {getTvSeries} from "../api/tmdb-api";
import {useQuery} from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";

const TvSeriesPage = (props) => {
    const { data, error, isLoading, isError } = useQuery("discover", getTvSeries);

    if (isLoading) {
        return <Spinner />;
    }
    if (isError) {
        return <h1>{error.message}</h1>;
    }

    const movies = data ? data.results : [];
    console.log(data)

      return (
        <PageTemplate
          title="Discover Series"
          movies={movies}
          action={(movie) => {
            return <AddToFavouritesIcon movie={movie} />;
          }}
          
        />
      );
    };

export default TvSeriesPage;