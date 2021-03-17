import React from 'react';
import imgSrc from './cats-versus-dogs.jpg';

export function Home() {
  return (
    <div>
      <img src={imgSrc} alt="Home" height="300" />
    </div>
  );
}
