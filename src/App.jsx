import React from 'react';
import UserContextProvider from './context/UserContextProvider';
import Login from './compoents/Login';
import Profile from './compoents/Profile';

const App = () => {
  return (
   <UserContextProvider>
   <h1 style={{textAlign:'center', fontFamily:'monospace',fontSize: 28, margin:12}}>Context Api</h1>
   <Login />
   <Profile />
   </UserContextProvider>
  );
}

export default App;
