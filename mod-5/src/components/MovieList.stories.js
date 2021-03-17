import { MemoryRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import { MovieList } from './MovieList';

export default {
  title: 'MovieList Component',
  component: MovieList,
  decorators: [(fn) => <MemoryRouter>{fn()}</MemoryRouter>],
};

export function RenderWithoutMovies() {
  return <MovieList />;
}

export function RenderWithTwoMovies() {
  return (
    <MovieList
      movies={[
        { id: 1, title: 'Movie one', vote_average: 7 },
        { id: 2, title: 'Movie two', vote_average: 7 },
      ]}
    />
  );
}

// RenderWithTwoMovies.decorators = [];

export function RenderWithAlongMovieTitle() {
  return (
    <MovieList
      movies={[
        {
          id: 1,
          title:
            'Movie one Movie one Movie one Movie one Movie one Movie one Movie one Movie one Movie one Movie one Movie one Movie one Movie one Movie one Movie one Movie one Movie one Movie one Movie one Movie one Movie one Movie one Movie one Movie one Movie one Movie one Movie one Movie one xxxxxx',
          vote_average: 7,
        },
      ]}
    />
  );
}
