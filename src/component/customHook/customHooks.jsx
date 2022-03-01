import React from 'react';
import UseScreenSize from './screenSize';

function CustomHooks() {
  const screenSize = UseScreenSize();
  return (
    <div>
      <h1>{screenSize}</h1>
    </div>
  );
}
export default CustomHooks;
