import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import classes from './jokes.module.css';

import { JokeDetails } from './joke-details';
import { SingleJoke } from './single-joke';
import { ErrorBoundary } from './error-boundary';

import { useFetch } from './useFetch';
import { themeContext } from './theme-context';

function ErrorDisplay({ error }) {
  return <div>There was an error: {error.message}</div>;
}

export function Jokes({ heading, url }) {
  const { theme } = React.useContext(themeContext);
  const [selected, setSelected] = useState(null);

  const { data: jokes, status } = useFetch(url);

  if (status === 'error') {
    return <div>Some error...</div>;
  }

  if (status !== 'ready') {
    return <div>Loading...</div>;
  }

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
          <ErrorBoundary key={selected?.id} errorComponent={<ErrorDisplay />}>
            {() => <JokeDetails joke={selected} />}
          </ErrorBoundary>
        </div>
      </div>
    </div>
  );
}
