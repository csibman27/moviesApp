import React, { useState } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {useQuery} from "react-query";
import Spinner from "../components/spinner";
import Header from "../components/headerMovieList";


const MyFantasyMoviePage = (props) => {
    
    const { data, error, isLoading, isError } = useQuery("fantasy");

    if (isLoading) {
        return <Spinner />;
    }
    if (isError) {
        return <h1>{error.message}</h1>;
    }

    return (
        <PageTemplate
            title="Upcoming Movies"
            setCurrentPage={handlePageChange}
            currentPage={currentPage}
            movies={movies}
            action={(movie) => {
                return (
                    <>
                        <AddToFavouritesIcon movie={movie} />
                       <AddPlaylistAddIcon movie={movie} />
                    </>
                )
            }}
        />
    );
};
export default MyFantasyMoviePage;
