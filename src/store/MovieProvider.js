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
  };

  const removeMovieHandler = id => {
    const existingMovieIndex = newMoviesList.findIndex(item => item.id === id);
    const existingItem = newMoviesList[existingMovieIndex];

    let updatedMovies;
    if (existingItem !== null) {
      updatedMovies = newMoviesList.filter(item => item.id !== id);
      setNewMoviesList(updatedMovies);
    }
  };
  return (
    <MovieContext.Provider value={{ movies: newMoviesList, onAddMovie: addMovieHandler, onRemove: removeMovieHandler }}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
