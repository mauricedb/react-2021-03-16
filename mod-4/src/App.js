import React, { useState } from 'react';
import classNames from 'classnames';

import classes from './App.module.css';

import { Jokes } from './components/jokes';

function App() {
  const [theme, setTheme] = useState('light');
  return (
    <div className={classNames(classes.app, classes[theme])}>
      <Jokes
        heading="Jon Skeet Jokes"
        theme={theme}
        url="https://the-problem-solver-sample-data.azurewebsites.net/jon-skeet"
      />
      <footer className={classes.footer}>
        <button onClick={() => setTheme('light')}>Light</button>
        <button onClick={() => setTheme('dark')}>Dark</button>
      </footer>
    </div>
  );
}

export default App;
