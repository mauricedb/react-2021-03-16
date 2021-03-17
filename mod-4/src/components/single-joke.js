import React from 'react';

export function SingleJoke({ joke, setSelected }) {
  return <li onClick={() => setSelected(joke)}>{joke.joke}</li>;
}
