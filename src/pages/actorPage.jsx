import React, { useState } from "react";
import PageTemplate from "../components/templateActorListPage";
import { getActors } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites';

const ActorPage = (props) => {
    
    const [ currentPage, setCurrentPage ] = useState(1);
    const { data, error, isLoading, isError } = useQuery("actors",
    getActors
    );
    //console.log("Actor data", data);
    //console.log("Detailed actor data", data)
    

    if (isLoading) {
        return <Spinner />;
    }
    if (isError) {
        return <h1>{error.message}</h1>;
    }

    const actors = data.results.map((actor) => {
        return actor;
      });
      console.log("Actors API call:", actors);
    return (
        <PageTemplate
            title="Discover Actors"
            actors={actors}
            action={(actor) => null}
        />
    );
};
export default ActorPage;
