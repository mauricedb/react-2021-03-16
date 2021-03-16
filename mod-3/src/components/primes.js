import React, { useRef, useState } from 'react';

import classes from './primes.module.css';

import { Prime } from './prime';

console.log(classes);

export function Primes() {
  const [start, setStart] = useState(100_001);
  const [count, setCount] = useState(500);
  const numbers = new Array(count).fill(null).map((_, index) => start + index);

  return (
    <div>
      <h2>Prime Numbers</h2>
      <div>
        <label>
          Start
          <input
            type="number"
            autoFocus
            value={start}
            onChange={(e) => setStart(+e.target.value)}
          />
        </label>
        <label>
          Count:
          <input
            type="number"
            value={count}
            onChange={(e) => setCount(+e.target.value)}
          />
        </label>
      </div>
      <div className={classes.primes}>
        {numbers.map((value) => (
          <Prime key={value} value={value} />
        ))}
      </div>
    </div>
  );
}
