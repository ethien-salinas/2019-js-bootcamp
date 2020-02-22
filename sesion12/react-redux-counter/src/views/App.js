import React from 'react';
import Counter from '../components/Counter';

export default function App(props) {

  return (
    <div>
      <h1>Hello World Redux</h1>
      <Counter
        value={props.store.getState()}
        onIncrement={() => props.store.dispatch({ type: 'INCREMENT' })}
        onDecrement={() => props.store.dispatch({ type: 'DECREMENT' })}
      />
    </div>
  );
}
