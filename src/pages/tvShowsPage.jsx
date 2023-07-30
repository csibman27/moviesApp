import React, { useState } from "react";
import PageTemplate from '../components/templateTVShowListPage'
import {getTvSeries} from "../api/tmdb-api";
import {useQuery} from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";

const TVShowsPage = (props) => {

  const [ currentPageShow, setCurrentPageShow ] = useState(1);
  const { data, error, isLoading, isError } = useQuery(["discover", {currentPageShow: currentPageShow}],
  getTvSeries
  );

  const handlePageChange = (newPage) => {
    setCurrentPageShow (newPage); 
  };

  if (isLoading) {
      return <Spinner />;
  }
  if (isError) {
      return <h1>{error.message}</h1>;
  }
  //console.log("Showing api:" + " " + getTvSeries)

  //const tvshows = data ? data.results : [];
  //console.log("Showing data:" + " " + data.results)

  const tvshows = data.results.map((tvShow) => {
    tvShow.title = tvShow.name;
    return tvShow;
  });
  //console.log(tvshows)
  

      return (
        <PageTemplate
          title="TV Shows"
          setCurrentPageShow={handlePageChange}
          currentPageShow={currentPageShow}
          tvshows={tvshows}
          action={(tvshow) => {
              return (
                  <>
                      <AddToFavouritesIcon tvshow={tvshow} />
                      {/*<AddPlaylistAddIcon tvshow={tvshow} /> */}
                  </>
              )
          }}
        />
      );
    };

export default TVShowsPage;