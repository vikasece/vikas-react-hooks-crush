import React, { useContext } from 'react';
import { AppContext } from './useContextComponent';

function User() {
  const { userName } = useContext(AppContext);
  return (
    <div>
      <h1>
        Name: <span>{userName}</span>
      </h1>
    </div>
  );
}
export default User;
