import { render, screen } from '@testing-library/react';
import { Greeting } from './greeting';

jest.mock('lodash.capitalize', () => (name) => `Fake ${name}`);

describe('Greeting', () => {
  test('it renders', () => {
    render(<Greeting firstName="maurice" />);
    // screen.debug();
    expect(screen.getByText('Hello Fake maurice')).toBeVisible();
  });

  test('it renders Jack', () => {
    render(<Greeting firstName="jack" />);
    // screen.debug();
    screen.getAllByText('Hello Fake jack');
    expect(screen.queryByText('Hello Fake jack')).toBeVisible();
  });
});
