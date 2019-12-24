import React from 'react';
import Users from './Users';
import Users2 from './Users2';
import { UsersProvider } from './UsersContext';

function App() {
  return (
    <UsersProvider>
      <Users2 />
    </UsersProvider>
  );
}

export default App;
