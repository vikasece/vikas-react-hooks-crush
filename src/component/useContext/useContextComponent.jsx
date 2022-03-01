import React, { useState, createContext } from 'react';
import Login from './login';
import User from './user';

export const AppContext = createContext(null);

function UseContextComponent() {
  const [userName, setUserName] = useState('');

  return (
    <AppContext.Provider value={{ userName, setUserName }}>
      <Login />
      <User />
    </AppContext.Provider>
  );
}

export default UseContextComponent;
