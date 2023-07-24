import React, { useState } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getMovies } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites';

const HomePage = (props) => {
    const [ currentPage, setCurrentPage ] = useState(1);
    const { data, error, isLoading, isError } = useQuery( ["discover", {currentPage: currentPage}], getMovies);
    //scroll down page that loads in more pages
    const [counts, setCounts] = useState({
        total_pages: 500,
        total_results: 10000
      });

    const hasNext = counts.total_pages > currentPage;
    
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

    return (
        <PageTemplate
            title="Discover Movies"
            setCurrentPage={handlePageChange}
            currentPage={currentPage}
            movies={movies}
            action={(movie) => {
                return <AddToFavouritesIcon movie={movie} />
            }}
        />
    );
};
export default HomePage;
