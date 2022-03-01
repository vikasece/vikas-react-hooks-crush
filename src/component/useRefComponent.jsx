import React from 'react';
import { useRef } from 'react';

const UseRefComponent = () => {
  const inputRef = useRef(null);

  const onRefClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h1>Ref Hook</h1>
      <input type='text' placeholder='enter' ref={inputRef} />
      <button onClick={onRefClick}>Change Name</button>
    </div>
  );
};

export default UseRefComponent;
