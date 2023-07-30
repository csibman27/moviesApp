import React, { useState } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getPopularMovies } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites';

const PopularMoviesPage = (props) => {
    
    const [ currentPage, setCurrentPage ] = useState(1);
    const { data, error, isLoading, isError } = useQuery(["movie", {currentPage: currentPage}],
    getPopularMovies
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

    const movies = data.results;
    console.log(data);

    return (
        <PageTemplate
            title="Popular Movies"
            setCurrentPage={handlePageChange}
            currentPage={currentPage}
            movies={movies}
            action={(movie) => {
                return <AddToFavouritesIcon movie={movie} />
            }}
        />
    );
};
export default PopularMoviesPage;
