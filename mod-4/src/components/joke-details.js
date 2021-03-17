import React from 'react';

import { rating } from './utils';

export function JokeDetails({ joke }) {
  if (!joke) {
    return null;
  }

  return (
    <div>
      <p>
        <b>Joke:</b> {joke.joke}
      </p>
      <p>
        <b>Rating:</b> {rating(joke.joke)}
      </p>
    </div>
  );
}
