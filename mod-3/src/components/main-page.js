import React, { useState } from 'react';

import classes from './main-page.module.css';

import { Greeting } from './greeting';
import { Primes } from './primes';

export function MainPage() {
  const [name, setName] = useState('Maurice');
  return (
    <div className={classes.page}>
      <h1>Performance Tuning</h1>
      <div>
        <label>
          Name:
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </label>
      </div>
      <Greeting name={name} />
      <Primes />
    </div>
  );
}
