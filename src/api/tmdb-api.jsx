
export const getMovies = (args) => {
  const [, idPart] = args.queryKey;
  const { currentPage } = idPart;
  //console.log(currentPage)
    return fetch(
    `https://api.themoviedb.org/3/discover/movie/?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${currentPage}`
    ).then((response) => {
        if (!response.ok) {
            throw new Error(response.json().message);
        }
        return response.json();
    })
        .catch((error) => {
            throw error
        });
};


export const getSimilars = (args) => {
  console.log(args)
  const [, idPart, yearPart] = args.queryKey;
  const { currentPage } = idPart;
  const { year } = yearPart;
  //console.log(currentPage)
    return fetch(
    `https://api.themoviedb.org/3/discover/movie/?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&year=${year}&include_video=false&page=${currentPage}`
    ).then((response) => {
        if (!response.ok) {
            throw new Error(response.json().message);
        }
        return response.json();
    })
        .catch((error) => {
            throw error
        });
};

export const getSearch = (args) => {
  const [, idPart] = args.queryKey;
  const { movieName } = idPart;
  const movieName1 = "rambo"
  return fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&query=${movieName}`
  ).then((response) => {
      if (!response.ok) {
          throw new Error(response.json().message);
      }
      return response.json();
  })
      .catch((error) => {
          throw error
      });
};


export const getMovie = (args) => {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}`
    ).then((response) => {
        if (!response.ok) {
            throw new Error(response.json().message);
        }
        return response.json();
    })
        .catch((error) => {
            throw error
        });
};


export const getGenres = async () => {
    return fetch(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
        import.meta.env.VITE_TMDB_KEY +
        "&language=en-US"
    ).then( (response) => {
        if (!response.ok) {
            throw new Error(response.json().message);
        }
        return response.json();
    })
        .catch((error) => {
            throw error
        });
};


export const getMovieImages = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
        `https://api.themoviedb.org/3/movie/${id}/images?api_key=${import.meta.env.VITE_TMDB_KEY}`
    ).then( (response) => {
        if (!response.ok) {
            throw new Error(response.json().message);
        }
        return response.json();

    })
        .catch((error) => {
            throw error
        });
};


export const getMovieReviews = (id) => {
    return fetch(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${import.meta.env.VITE_TMDB_KEY}`
    ).then((response) => response.json())
     .then((json) => {
            return json.results;
        })
        .catch((error) => {
            throw error
        });
};

export const getSeriesReviews = (id) => {
  return fetch(
      `https://api.themoviedb.org/3/tv/${id}/reviews?api_key=${import.meta.env.VITE_TMDB_KEY}`
  ).then((response) => response.json())
   .then((json) => {
          return json.results;
      })
      .catch((error) => {
          throw error
      });
};

export const getUpcomingMovies = (args) => {
  const [, idPart] = args.queryKey;
  const { currentPage } = idPart;
  return fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${currentPage}`
    ).then( (response) => {
        if (!response.ok) {
            throw new Error(response.json().message);
        }
        return response.json();

    })
        .catch((error) => {
            throw error
        });
};

export const getTvSeries = (args) => {
  const [, idPart] = args.queryKey;
  const { currentPageShow } = idPart;
  return fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${currentPageShow}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
      })
      .catch((error) => {
        throw error;
      });
  };

  export const getTVShowImages = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/tv/${id}/images?api_key=${import.meta.env.VITE_TMDB_KEY}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
      })
      .catch((error) => {
        throw error;
      });
  };

  export const getTVShowDetails = (args) => {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/tv/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
      })
      .catch((error) => {
        throw error;
      });
  };

  export const getPopularMovies = (args) => {
    const [, idPart] = args.queryKey;
    const { currentPage } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&page=${currentPage}`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
       throw error
    });
  };

  export const getSimilarMovies = () => {
    // const [, idPart] = args.queryKey;
    // const  { movie_id } = idPart;
    const movie_id = 33
    return fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-USpage=1`
    ).then((response) => {
      if (!response.ok){
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
    });
  };

  export const getActor = (args) => {
    const [, idPart] = args.queryKey;
    const { id_actor } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/person/${id_actor}?api_key=${import.meta.env.VITE_TMDB_KEY}`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };

  export const getActors = (args) => {
    const [, idPart] = args.queryKey;
    const { currentPage } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/person/popular?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&page=${currentPage}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
      })
      .catch((error) => {
        throw error;
      });
  };

  export const getActorImages = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/person/${id}/tagged_images?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&page=1`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
      })
      .catch((error) => {
        throw error;
      });
  };

  export const getActorBio = (args) => {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/person/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
      })
      .catch((error) => {
        throw error;
      });  
  };

  export const getActorMovies = (args) => {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&page=1`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
      })
      .catch((error) => {
        throw error;
      });
  };