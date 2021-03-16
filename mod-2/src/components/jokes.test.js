import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { Jokes } from './jokes';

function renderJokes(jokes) {
  const store = createStore(() => ({ jokes }));
  return render(
    <Provider store={store}>
      <Jokes />
    </Provider>
  );
}

test('renders no jokes', () => {
  renderJokes([]);
  screen.debug();
});

test('renders one joke', () => {
  renderJokes([{ id: 1, joke: 'Some joke' }]);
  screen.debug();
});

test('renders two joke', () => {
  const { container } = renderJokes([
    { id: 1, joke: 'Some joke' },
    { id: 2, joke: 'Another joke' },
  ]);

  expect(container).toMatchSnapshot();
});
