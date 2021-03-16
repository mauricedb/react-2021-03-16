import React, { useEffect, useState, Fragment } from 'react';
import './jokes.css';

import D from './jokes-presentation';

const url =
  'https://the-problem-solver-sample-data.azurewebsites.net/jon-skeet';

export function Jokes({ heading }) {
  // useState(heading)
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
    <D
      heading={heading}
      jokes={jokes}
      selected={selected}
      setSelected={setSelected}
    />
  );
}
