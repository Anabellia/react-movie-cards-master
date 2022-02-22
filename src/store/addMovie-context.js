import React from 'react';

const MovieContext = React.createContext({
  movies: [],
  onAddMovie: movie => {},
});

export default MovieContext;
