import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
    const [favourites, setFavourites] = useState([]);
    const [tvFavourites, setTvFavourites] = useState([]); //NEW
    const [myReviews, setMyReviews] = useState( {} )  // NEW
    const [mustWatch, setMustWatch] = useState([]);
    const [fantasyMovie, setFantasyMovie] = useState([]);

    console.log("Must Watch Array", mustWatch);
    //console.log("fantasy movie", fantasyMovie);

    const addToFavourites = (movie) => {
        let updatedFavourites = [...favourites];
        if (!favourites.includes(movie.id)) {
            updatedFavourites.push(movie.id);
        }
        setFavourites(updatedFavourites);
    };

    // We will use this function in a later section
    const removeFromFavourites = (movie) => {
        setFavourites(favourites.filter((mId) => mId !== movie.id));
    };

    const addReview = (movie, review) => {   // NEW
        setMyReviews( {...myReviews, [movie.id]: review } )
    };

    const addToMustWatchList = (movie) => {
        if (!mustWatch.includes(movie.id)) {
            let newMustWatch = [...mustWatch, movie.id];
            setMustWatch(newMustWatch);
        }
    };

    return (
        <MoviesContext.Provider
            value={{
                favourites,
                mustWatch,
                tvFavourites,
                fantasyMovie,
                addToFavourites,
                removeFromFavourites,
                addReview,
                addToMustWatchList,
            }}
        >
            {props.children}
        </MoviesContext.Provider>
    );
};

export default MoviesContextProvider;
