import React from 'react';
import capitalize from 'lodash.capitalize';

export function Greeting({ firstName }) {
  return <div>Hello {capitalize(firstName)}</div>;
}
