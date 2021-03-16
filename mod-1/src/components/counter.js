import React, { Component, useState } from 'react';

export class CounterClass extends Component {
  state = { count: 0 };

  render() {
    return (
      <div>
        <h2>Counter Class..</h2>
        <p>The count is: {this.state.count}</p>
        <button
          onClick={() => {
            this.setState((state) => ({
              count: state.count + 1,
            }));
            this.setState((state) => ({
              count: state.count + 1,
            }));
          }}
        >
          Increment
        </button>
      </div>
    );
  }
}

export function CounterFunction() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter Function..</h2>
      <p>The count is: {count}</p>
      <button
        onClick={() => {
          setCount((c) => c + 1);
          setCount((c) => c + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
}
