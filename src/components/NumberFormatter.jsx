import { useState } from 'react';

const NumberFormatter = () => {
  const [numberFormatter, setNumberFormatter] = useState('1');

  const onOptionChange = e => {
    setNumberFormatter(e.target.value);
  };

  return (
    <>
      <h2>Number Formatter</h2>
      <div>
        {formatterOptions.map(option => {
          return (
            <>
              <label htmlFor={option} key={option}>
                {option}
              </label>
              <input
                type="radio"
                value={option}
                id={option}
                checked={numberFormatter === option}
                onChange={onOptionChange}
              />
            </>
          );
        })}
      </div>
      <h4>Output</h4>
      <ul>
        <li>123_456_789.22</li>
        <li>150_000_00</li>
        <li>1_408.23</li>
        <li>99.2345</li>
      </ul>
    </>
  );
};

export default NumberFormatter;

const formatterOptions = ['1', '2', '3', '4'];
