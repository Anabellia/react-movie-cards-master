import React from 'react';

import Header from './Header';
import Movies from './Movie/Movies';
import AddMovies from './Form/AddMovies';
import MovieProvider from '../store/MovieProvider';

const title = 'React Movie Cards';

const App = () => (
  <MovieProvider>
    <Header title={title} />
    <div className="mt-5">
      <AddMovies />
      <Movies />
    </div>
  </MovieProvider>
);

export default App;
