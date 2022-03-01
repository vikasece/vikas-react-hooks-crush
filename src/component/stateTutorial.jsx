import React from 'react';
import { useState } from 'react';

const StateTutorial = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const onHandleChange = () => {
    setCount(count + 1);
  };
  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div>
      {count}
      <button className='btn btn-primary' onClick={onHandleChange}>
        Increment
      </button>
      <input
        type='text'
        value={inputValue}
        placeholder='enter'
        onChange={onInputChange}
      />
      <h1>{inputValue}</h1>
    </div>
  );
};

export default StateTutorial;
