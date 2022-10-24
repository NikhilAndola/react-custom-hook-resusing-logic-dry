import React from 'react';
import './style.css';
import { useToggle } from './useToggle';
import { useApiFetch } from './useApiFetch';

export default function App() {
  const [isVisible, toggle] = useToggle();
  const [condition1, toggler1] = useToggle();

  const [data, status] = useApiFetch(
    'https://jsonplaceholder.typicode.com/todos'
  );

  console.log('data', data, status);

  return (
    <div>
      <h1>Custom hooks are good for abstracting logic!</h1>
      <button onClick={toggle}>{isVisible ? 'Hide' : 'Show'}</button>
      {isVisible && <h2>Hidden text</h2>}
      <button onClick={toggler1}>{condition1 ? 'Hide2' : 'Show2'}</button>
      {condition1 && <h2>custom hook</h2>}
    </div>
  );
}
