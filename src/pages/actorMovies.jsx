import React, { useState } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getActorMovies } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { useParams } from "react-router-dom";

const ActorMoviesPage = (props) => {
    
    const { id } = useParams();
    const [ currentPage, setCurrentPage ] = useState(1);
    const { data: movie, error, isLoading, isError } = useQuery(["actor movies", { id: id }, {currentPage: currentPage}],
    getActorMovies
    );

    const handlePageChange = (newPage) => {
        setCurrentPage (newPage); 
    };
    //console.log("Detailed actor data", data)
    

    if (isLoading) {
        return <Spinner />;
    }
    if (isError) {
        return <h1>{error.message}</h1>;
    }

    const movies = movie.cast.map((movie) => {
        return movie;
      });
      console.log("Actors movies API call:", movies);
    return (
        <PageTemplate
            title="Actor Movies"
            setCurrentPage={handlePageChange}
            currentPage={currentPage}
            movies={movies}
            action={(movie) => null}
        />
    );
};
export default ActorMoviesPage;
