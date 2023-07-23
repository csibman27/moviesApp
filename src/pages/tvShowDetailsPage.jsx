import React from "react";
import { useParams } from "react-router-dom";
import TVShowDetails from "../components/tvShowDetails";
import TVShowPageTemplate from "../components/templateTVShowPage";
import { getTvSeries } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner';

const TVShowDetailsPage = () => {
    const { id } = useParams();

    const { data: tvshow, error, isLoading, isError } = useQuery(
        ["tvshow", { id: id }],
        getTvSeries
    );

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }

    return (
        <>
            {tvshow ? (
                <>
                    <TVShowPageTemplate tvshow={tvshow}>
                        <TVShowDetails tvshow={tvshow} />
                    </TVShowPageTemplate>
                </>
            ) : (
                <p>Waiting for TV-Show details</p>
            )}
        </>
    );
};

export default TVShowDetailsPage;
