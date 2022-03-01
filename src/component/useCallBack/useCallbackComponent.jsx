import React, { useCallback, useState } from 'react';
import ChildrenComponent from './childComponent';

function UseCallbackComponent() {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState('This is my call ');
  const returnComment = useCallback(
    (name) => {
      return data + name;
    },
    [data]
  );
  return (
    <div>
      <ChildrenComponent returnComment={returnComment} />
      <button onClick={() => setToggle(!toggle)}>Click</button>
    </div>
  );
}

export default UseCallbackComponent;
