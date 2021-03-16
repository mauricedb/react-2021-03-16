import React, { Fragment, useState, useMemo } from 'react';
import propTypes from 'prop-types';

import { SelectedJoke } from './selected-joke';

export default function D({ heading, jokes, setSelected, selected }) {
  const [ratingToShow] = useState(4);
  const goodJokes = useMemo(
    () => jokes.filter((j) => j.rating > ratingToShow),
    [jokes, ratingToShow]
  );

  return (
    <div>
      <h1>{heading}</h1>

      <div className="jokes">
        <div className="panel">
          <ul>
            {jokes.map((j) => (
              <Fragment key={j.id}>
                <li onClick={() => setSelected(j)}>{j.joke}</li>
                <li> Stuff</li>
              </Fragment>
            ))}
          </ul>
        </div>
        <div className="panel">
          {selected && <SelectedJoke key={selected.id} selected={selected} />}
        </div>
      </div>
    </div>
  );
}

D.displayName = 'The component name';

D.propTypes = {
  selected: propTypes.object,
};

D.defaultProps = {
  heading: 'Some jokes',
  selected: {
    id: 1,
    joke: 'Not yet',
  },
};
