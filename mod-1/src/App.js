import React from 'react';

import { Jokes } from './components/jokes';
import { CounterClass, CounterFunction } from './components/counter';

function App() {
  return (
    <div>
      {/* <CounterClass /> */}
      {/* <CounterFunction /> */}

      <Jokes heading="Jon Skeet Jokes" />
    </div>
  );
}

export default App;
