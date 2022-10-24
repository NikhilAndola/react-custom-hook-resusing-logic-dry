import React from 'react';
import './style.css';
import { useToggle } from './useToggle';

export default function App() {
  const [isVisible, toggle] = useToggle();
  const [condition1, toggler1] = useToggle();
  return (
    <div>
      <button onClick={toggle}>{isVisible ? 'Hide' : 'Show'}</button>
      {isVisible && <h1>Hidden text</h1>}
      <button onClick={toggler1}>{condition1 ? 'Hide2' : 'Show2'}</button>
      {condition1 && <h1>custom hook</h1>}
    </div>
  );
}
