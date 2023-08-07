import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { Select } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { Button } from '@material-ui/core';
import FantasyMovie from '../myFantasyMovie';
import { MoviesContext } from "../../contexts/moviesContext";
import { getGenres, getMovie } from '../../api/tmdb-api';
import {useQuery} from "react-query";



//array of genres
const genresList = ['Action', 'Adventure', 'Animation', 'Comedy', 'Fantasy',
'Horror', 'Romance', 'Sci-Fi', 'Thriller'];
//array of production companies
const companyList = ['LuckyChap Entertainment', 'Heyday Films', 'NB/GG Pictures', 'Mattel' ];
//context
//const context = useContext(MoviesContext);

const FantasyMovieForm = ({ movie }) => {

  const [title, setTitle] = useState('');
  const [overview, setOverview] = useState('');
  const [genre, setGenre] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [runtime, setRuntime] = useState('');
  const [productionCompany, setProductionCompany] = useState('');
  // const { data, setMovie } = useQuery("fantasy",
  // getGenres
  // );
  const [fantasyMovies, setFantasyMovies] = useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Here you can perform any actions with the movie data (e.g., save to database)
    //console.log({ title, overview, genre, releaseDate, runtime, productionCompany });
    setFantasyMovies  ((prev) => ([...prev, {title: title , overview: overview, genre: genre, releaseDate: releaseDate,
      runtime: runtime, productionCompany: productionCompany}]))
      
    // Clear form inputs
    setTitle('');
    setOverview('');
    setGenre('');
    setReleaseDate('');
    setRuntime('');
    setProductionCompany('');
  };
  console.log("T: ", fantasyMovies)

  return (
    <>
    <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: 400, margin: 'auto' }}>
      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={{ marginBottom: 16 }}
      />
      <TextField
        label="Overview"
        value={overview}
        onChange={(e) => setOverview(e.target.value)}
        required
        multiline
        rows={4}
        style={{ marginBottom: 16 }}
      />
      <FormControl style={{ marginBottom: 16 }}>
        <InputLabel>Genre</InputLabel>
        <Select
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          required
        >
          {genresList.map((genre) => (
            <MenuItem key={genre} value={genre}>
              {genre}
            </MenuItem>
           ))}
        </Select>
      </FormControl>
      <TextField
        label="Release Date"
        value={releaseDate}
        onChange={(e) => setReleaseDate(e.target.value)}
        type="date"
        required
        style={{ marginBottom: 16 }}
      />
      <TextField
        label="Runtime"
        value={runtime}
        onChange={(e) => setRuntime(e.target.value)}
        type="digit"
        required
        style={{ marginBottom: 16 }}
      />
        <FormControl style={{ marginBottom: 25 }}>
        <InputLabel>Production Company</InputLabel>
        <Select
          value={productionCompany}
          onChange={(e) => setProductionCompany(e.target.value)}
          required
        >
          {companyList.map((productionCompany) => (
            <MenuItem key={productionCompany} value={productionCompany}>
              {productionCompany}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <br></br>
      {/* End 2 of Production company */}

      <Button variant="contained" color="primary" type="submit">
        Create Movie
      </Button>
    </form>
    <FantasyMovie fantasyMovie={fantasyMovies} />
    </>
  );
};

export default FantasyMovieForm;