import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { Select } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { Button } from '@material-ui/core';



//array of genres
const genresList = ['Action', 'Adventure', 'Animation', 'Comedy', 'Fantasy',
'Horror', 'Romance', 'Sci-Fi', 'Thriller'];

const FantasyMovieForm = () => {

  const [title, setTitle] = useState('');
  const [overview, setOverview] = useState('');
  const [genre, setGenre] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [runtime, setRuntime] = useState('');
  const [productionCompany, setProductionCompany] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Here you can perform any actions with the movie data (e.g., save to database)
    console.log({ title, overview, genre, releaseDate, runtime, productionCompany });
    // Clear form inputs
    setTitle('');
    setOverview('');
    setGenre('');
    setReleaseDate('');
    setRuntime('');
    setProductionCompany('');
  };

  return (
    
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
      <TextField
        label="Production Company"
        value={productionCompany}
        onChange={(e) => setProductionCompany(e.target.value)}
        style={{ marginBottom: 16 }}
      />
      <Button variant="contained" color="primary" type="submit">
        Create Movie
      </Button>
    </form>
  );
};

export default FantasyMovieForm;