import React, { useState } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);
  const handleReset = () => setCount(0);

  return (
    <div className="counter-container">
      <h1 className="counter-title">Counter</h1>
      <p className="counter-display">{count}</p>
      <div className="button-group">
        <button onClick={handleIncrement} className="counter-button increment-btn">
          Increment +
        </button>
        <button onClick={handleDecrement} className="counter-button decrement-btn">
          Decrement -
        </button>
        <button onClick={handleReset} className="counter-button reset-btn">
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;