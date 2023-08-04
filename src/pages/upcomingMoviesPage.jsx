import React, { useState } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {getUpcomingMovies} from "../api/tmdb-api";
import {useQuery} from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";
import AddPlaylistAddIcon from "../components/cardIcons/playlistAddIcon";


const UpcomingMoviesPage = (props) => {
    const [ currentPage, setCurrentPage ] = useState(1);
    const { data, error, isLoading, isError } = useQuery(["upcomingmovie", {currentPage: currentPage}],
     getUpcomingMovies
     );

    const handlePageChange = (newPage) => {
        setCurrentPage (newPage); 
    };

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
export default UpcomingMoviesPage;
