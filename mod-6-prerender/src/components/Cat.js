import React from 'react';
import imgSrc from './cat.jpg';

export function Cat() {
  return (
    <div>
      <h2>A cute cat</h2>
      <img src={imgSrc} alt="A cat" height="300" />
    </div>
  );
}
