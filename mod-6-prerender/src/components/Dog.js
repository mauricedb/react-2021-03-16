import React from 'react';
import imgSrc from './dog.jpg';

export function Dog() {
  return (
    <div>
      <h2>A cute dog</h2>

      <img src={imgSrc} alt="A dog" height="300" />
    </div>
  );
}
