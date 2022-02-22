import React, { useState, useEffect } from 'react';
import MovieContext from './addMovie-context';
import MovieService from '../services/MovieService';

const MovieProvider = props => {
  const existingMovieList = MovieService.getMovies();
  const [newMoviesList, setNewMoviesList] = useState(existingMovieList);

  const addMovieHandler = movie => {
    setNewMoviesList(oldMovies => {
      return [movie, ...oldMovies];
    });
    console.log(newMoviesList);
  };
  return (
    <MovieContext.Provider value={{ movies: newMoviesList, onAddMovie: addMovieHandler }}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
