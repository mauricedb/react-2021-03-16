import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import classes from './jokes.module.css';

import { JokeDetails } from './joke-details';
import { SingleJoke } from './single-joke';

export function Jokes({ heading, theme, url }) {
  const [selected, setSelected] = useState(null);
  const [jokes, setJokes] = useState(null);

  useEffect(() => {
    async function fetchJokes() {
      const rsp = await fetch(url);
      const jokes = await rsp.json();
      setJokes(jokes);
    }

    fetchJokes();
  }, [url]);

  if (!jokes) {
    return <div>Loading...</div>;
  }

  console.log(classes);

  return (
    <div>
      <h1>{heading}</h1>

      <div className={classes.jokes}>
        <div className={classNames(classes.panel, classes[theme])}>
          <ul>
            {jokes.map((joke) => (
              <SingleJoke key={joke.id} joke={joke} setSelected={setSelected} />
            ))}
          </ul>
        </div>
        <div className={classNames(classes.panel, classes[theme])}>
          <JokeDetails joke={selected} />
        </div>
      </div>
    </div>
  );
}
