import React, { useState } from "react";
import PageTemplate from '../components/templateTVShowListPage'
import {getTvSeries} from "../api/tmdb-api";
import {useQuery} from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";

const TVShowsPage = (props) => {
    const { data, error, isLoading, isError } = useQuery("discover", getTvSeries);

    if (isLoading) {
        return <Spinner />;
    }
    if (isError) {
        return <h1>{error.message}</h1>;
    }


    const tvshows = data.results;
  

      return (
        <PageTemplate
          title="TV Series"
          tvshows={tvshows}
          
        />
      );
    };

export default TVShowsPage;