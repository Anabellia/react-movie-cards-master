import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';
import MovieContext from '../../store/addMovie-context';

const getMovies = () => {
  const movieCtx = useContext(MovieContext);

  const movieRemoveHandler = id => {
    movieCtx.onRemove(id);
  };
  return (
    <div className="card-deck">
      {movieCtx.movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} onRemove={movieRemoveHandler.bind(null, movie.id)} />
      ))}
    </div>
  );
};

const MovieList = () => {
  return <div>{getMovies()}</div>;
};

MovieList.defaultProps = {
  movies: [],
};

MovieList.propTypes = {
  movies: PropTypes.array,
};

export default MovieList;
