import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getSimilarMovies, getSearch } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";
import { useParams } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";

const SimilarMoviesPage = (props) => {
  const { movie_id } = useParams(1);
  const { data, error, isLoading, isError } = useQuery(
    ["similar", { currentPage: 1 }, { id: movie_id }],
    getSimilarMovies
  );
  const [searchText, setSearchText] = useState(""); //Searchfield
  const [ movieName, setMovieName ] = useState("A");
  const { data: search } = useQuery(["search", { movieName: movieName }], getSearch);
  //console.log("WHATS ID: ",movieName)

  const handleSearch = (e) => {
    setMovieName(searchText);
  };
  
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  //Similar movies call
  const movies = data ? data.results : [];
  //search call
  const searchResult = search ? search.results : [];

  return (
    <>
      <div>
        <TextField
          fullWidth
          label="Search"
          id="fullWidth"
          variant="filled"
          type="text"
          value={searchText}
          onChange={handleChange}
        />
        <Button variant="contained" color="primary" onClick={handleSearch}>
          Search
        </Button>
      </div>
      <PageTemplate
            title="Similar Movies"
            movies={searchResult}
            action={(movie) => {
                return <AddToFavouritesIcon movie={movie} />
            }}
        />
    </>
  );
};
export default SimilarMoviesPage;