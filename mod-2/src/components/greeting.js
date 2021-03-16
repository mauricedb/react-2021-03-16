import React from 'react';
import capitalize from 'lodash.capitalize';

export function Greeting({ firstName }) {
  if (firstName === 'pierre') {
    return null;
  }

  return (
    <div>
      <div>Hello {capitalize(firstName)}</div>
      {/* <div>Hello {capitalize(firstName)}</div> */}
    </div>
  );
}
