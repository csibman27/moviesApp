import React, { useState } from "react";
import PageTemplate from "../components/templateActorPage";
import { getActorBio } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { useParams } from "react-router-dom";
import ActorDetails from "../components/actorDetails";

const ActorBioPage = (props) => {
    
    const { id } = useParams();
    const { data: actor, error, isLoading, isError } = useQuery(
        ["actors", {id: id}],
        getActorBio
    );

    if (isLoading) {
        return <Spinner />;
    }
    if (isError) {
        return <h1>{error.message}</h1>;
    }
   
    return (
        <>
          {actor ? (
            <>
              <PageTemplate actor={actor}>
                <ActorDetails actor={actor} />
              </PageTemplate>
            </>
          ) : (
            <p>Waiting for movie details</p>
          )}
        </>
      );
    };
export default ActorBioPage;
