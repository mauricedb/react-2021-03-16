import React, { useEffect } from 'react';
import { rating } from '../utils';

export function SelectedJoke({ selected }) {
  useEffect(() => {
    console.log('SelectedJoke has mounted');
  }, []);

  if (!selected) {
    return null;
  }

  return (
    <>
      <p>
        <b>Joke:</b> {selected.joke}
      </p>
      <p>
        <b>Rating:</b> {rating(selected)}
      </p>
    </>
  );

  //   return (
  //     <React.Fragment >
  //       <p>
  //         <b>Joke:</b> {selected.joke}
  //       </p>
  //       <p>
  //         <b>Rating:</b> {rating(selected)}
  //       </p>
  //     </React.Fragment>
  //   );

  //   return [
  //     <p key="joke">
  //       <b>Joke:</b> {selected.joke}
  //     </p>,
  //     <p key="rating">
  //       <b>Rating:</b> {rating(selected)}
  //     </p>,
  //   ];
}
