import React from 'react';
import { useEffect } from 'react';

function ChildrenComponent({ returnComment }) {
  useEffect(() => {
    console.log('Function Called');
  }, [returnComment]);
  return (
    <>
      <h1>Child Component</h1>
      <div>{returnComment('vikas')}</div>
    </>
  );
}
export default ChildrenComponent;
