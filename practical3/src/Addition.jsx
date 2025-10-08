import React, { useState } from 'react';
import './Addition.css';

function Addition() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [sum, setSum] = useState(null);

  const handleCalculate = () => {
    const result = Number(number1) + Number(number2);
    setSum(result);
  };

  return (
    <div className="addition-container">
      <h1>Add Two Numbers</h1>
      <div className="input-group">
        <input
          type="number"
          value={number1}
          onChange={e => setNumber1(e.target.value)}
          placeholder="First Number"
          className="number-input"
        />
        <span className="plus-sign">+</span>
        <input
          type="number"
          value={number2}
          onChange={e => setNumber2(e.target.value)}
          placeholder="Second Number"
          className="number-input"
        />
      </div>
      <button onClick={handleCalculate} className="calculate-btn">
        Calculate Sum
      </button>

      {sum !== null && (
        <h2 className="result">
          Result: {sum}
        </h2>
      )}
    </div>
  );
}

export default Addition;