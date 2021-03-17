import React, { useState, useContext } from 'react';
import classNames from 'classnames';

import classes from './App.module.css';

import { Jokes } from './components/jokes';
import { ErrorBoundary } from './components/error-boundary';

import { themeContext } from './components/theme-context';

function App() {
  const { theme, setTheme } = useContext(themeContext);

  return (
    <ErrorBoundary>
      {(error) => {
        return (
          <div className={classNames(classes.app, classes[theme])}>
            <Jokes
              heading="Jon Skeet Jokes"
              url="https://the-problem-solver-sample-data.azurewebsites.net/jon-skeet"
            />
            <footer className={classes.footer}>
              <button onClick={() => setTheme('light')}>Light</button>
              <button onClick={() => setTheme('dark')}>Dark</button>
            </footer>
          </div>
        );
      }}
    </ErrorBoundary>
  );
}

export default App;
