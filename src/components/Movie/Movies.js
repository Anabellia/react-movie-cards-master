import React, { useEffect, useState, useContext } from 'react';

import MovieList from './MovieList';
import MovieService from '../../services/MovieService';
import MovieContext from '../../store/addMovie-context';

const Movies = () => {
  const ctxMovies = useContext(MovieContext);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(ctxMovies.movies);
  }, [ctxMovies.movies]);

  return (
    <div className="container-fluid" style={{ marginLeft: '-15px' }}>
      <div className="d-flex flex-row">
        <div className="col-sm-12">
          <MovieList movies={movies} />
        </div>
      </div>
    </div>
  );
};

export default Movies;
