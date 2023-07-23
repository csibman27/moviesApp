import React, { useState } from "react";
import PageTemplate from '../components/templateMovieListPage'
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

    const series = data.results;

      return (
        <PageTemplate
          title="TV Series"
          series={series}
          
        />
      );
    };

export default TvSeriesPage;