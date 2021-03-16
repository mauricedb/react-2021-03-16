import React, { useEffect, useState } from 'react';
import './jokes.css';

import { rating } from './utils';

const url =
  'https://the-problem-solver-sample-data.azurewebsites.net/jon-skeet';

export function Jokes({ heading }) {
  const [selected, setSelected] = useState(null);
  const [jokes, setJokes] = useState(null);

  useEffect(() => {
    async function fetchJokes() {
      const rsp = await fetch(url);
      const jokes = await rsp.json();
      setJokes(jokes);
    }

    fetchJokes();
  }, []);

  if (!jokes) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{heading}</h1>

      <div className="jokes">
        <div className="panel">
          <ul>
            {jokes.map((j) => (
              <li onClick={() => setSelected(j)}>{j.joke}</li>
            ))}
          </ul>
        </div>
        <div className="panel">
          {selected && (
            <div>
              <p>
                <b>Joke:</b> {selected.joke}
              </p>
              <p>
                <b>Rating:</b> {rating(selected)}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
