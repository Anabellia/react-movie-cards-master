import React from 'react';

const MovieContext = React.createContext({
  movies: [],
  onAddMovie: movie => {},
  onRemove: id => {},
});

export default MovieContext;
