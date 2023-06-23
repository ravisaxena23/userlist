import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" exact element={<UserList/>} />
        <Route path="/user/:id" element={<UserDetails/>} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;
