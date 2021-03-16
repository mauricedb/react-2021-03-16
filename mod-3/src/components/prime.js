import React from 'react';
import { useInView } from 'react-intersection-observer';
import 'moment';

import classes from './prime.module.css';

const numberFormat = Intl.NumberFormat('lt');

function isPrime(value) {
  let isPrime = true;
  if (value < 2) {
    isPrime = false;
  }

  for (var i = 2; i < value - 1; i++) {
    if (value % i === 0) {
      isPrime = false;
    }
  }
  return isPrime;
}

export function Prime({ value }) {
  const { ref, inView } = useInView();

  return (
    <div className={classes.prime} ref={ref}>
      <div>{numberFormat.format(value)}</div>
      <div>{!inView ? '?' : isPrime(value) ? '✔️' : '❌'}</div>
    </div>
  );
}

export const FastPrime = React.memo(Prime);
