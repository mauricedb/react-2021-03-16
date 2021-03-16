import React from 'react';
import { useSelector } from 'react-redux';

export function Summary() {
  const jokesLength = useSelector((state) => state.jokes.length);

  return <SummaryPresentantion jokesLength={jokesLength} />;
}

export function SummaryPresentantion({ jokesLength }) {
  return (
    <div>
      <h2>Jokes Summary</h2>

      <p>There are {jokesLength} jokes</p>
    </div>
  );
}
