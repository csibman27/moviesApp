import React, { useState } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {useQuery} from "react-query";
import Spinner from "../components/spinner";
import Header from "../components/headerMovieList";
import FantasyMovieForm from "../components/myFantasyMovieForm";
import { getMovie } from "../api/tmdb-api";


const MyFantasyMoviePage = (props) => {
    
    const { data, error, isLoading, isError } = useQuery("fantasy",
    getMovie
    );
    
/*
The user can create their fantasy movie record
Limit the details to Title, Overview, Genres, Release Date, Runtime, and Production Company(s)
*/
    return (
        <>
           <Header title="My Fantasy Movie">
           </Header>
           <FantasyMovieForm />
           
           {/* <MyFantasyMovieForm /> */}
        </>
        
    );
};
export default MyFantasyMoviePage;
