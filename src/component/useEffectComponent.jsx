import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

const UseEffectComponent = () => {
  const [data, setData] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/comments')
      .then((response) => {
        setData(response.data[0].email);
        console.log('API called');
      });
  }, [count]);

  return (
    <div>
      <h1>Hello{data}</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
};

export default UseEffectComponent;
