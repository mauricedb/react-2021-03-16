import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { deleteJoke } from '../redux/actions';

export function Jokes() {
  const dispatch = useDispatch();
  const jokes = useSelector((state) => state.jokes);

  return (
    <div>
      <h2>Chuck Norris Jokes</h2>
      <ul>
        {jokes.map((joke) => (
          <li key={joke.id}>
            {joke.joke}{' '}
            <button onClick={() => dispatch(deleteJoke(joke.id))}>
              &#9249;
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
