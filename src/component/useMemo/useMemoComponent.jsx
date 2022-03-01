import React, { useState, useEffect } from 'react';
import axois from 'axios';
import { useMemo } from 'react';

function UseMemoComponent() {
  const [data, setData] = useState('');
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axois
      .get('https://jsonplaceholder.typicode.com/comments')
      .then((response) => setData(response.data));
  }, []);

  const getLargestName = (comment) => {
    let largestName = '';
    for (let i = 0; i < comment.length; i++) {
      let currentName = data[i].name;
      if (currentName.length > largestName.length) {
        largestName = currentName;
      }
    }
    return largestName;
  };

  const getName = useMemo(() => getLargestName(data), [data]);
  return (
    <div>
      <h1>Use Memo</h1>
      <p>{getName}</p>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <p>Toggled</p>}
    </div>
  );
}
export default UseMemoComponent;
