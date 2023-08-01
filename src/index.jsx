import MovieReviewPage from "./pages/movieReviewPage";
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes, Link } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; // NEW
import SiteHeader from './components/siteHeader'
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import TVShowsPage from './pages/tvShowsPage';
import TVShowDetailsPage from "./pages/tvShowDetailsPage";
import PopularMoviesPage from "./pages/popularMoviesPage";
import ActorPage from "./pages/actorPage";
import ActorBioPage from "./pages/actorBioPage";
import ActorMoviesPage from "./pages/actorMovies";
import SimilarMoviesPage from "./pages/similarMoviesPage";
import MyFantasyMoviePage from "./pages/myFantasyMoviePage";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 360000,
            refetchInterval: 360000,
            refetchOnWindowFocus: false
        },
    },
});

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <SiteHeader />      {/* Header imported  */}
            <MoviesContextProvider>
            <Routes>
                <Route path="/movies/favourites" element={<FavouriteMoviesPage />} />
                <Route path="/movies/:id" element={<MoviePage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<Navigate to="/" />} />
                <Route path="/reviews/:id" element={<MovieReviewPage/>} />
                <Route path="/movies/upcoming" element={<UpcomingMoviesPage/>} />
                <Route path="/movies/:id/similar" element={<SimilarMoviesPage/>} />
                <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
                <Route path="/" element={<AddMovieReviewPage/>} />
                <Route path="/tvshows" element={<TVShowsPage/>} />
                <Route path="/tvshow/:id" element={<TVShowDetailsPage />} />*/ 
                <Route path="/movies/popular" element={<PopularMoviesPage />} />
                <Route path="/actors" element={<ActorPage />} />
                <Route path="/actor/:id" element={<ActorBioPage />} />
                <Route path="/actor/:id/movies" element={<ActorMoviesPage />} />
                <Route path="/fantasy" element={<MyFantasyMoviePage />} />
                 
            </Routes>
            </MoviesContextProvider>
           {/* <CustomIcons />  took away footer for pagination */}
        </BrowserRouter>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);
