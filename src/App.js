import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login, Register, Barang, Supplier } from './components';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/barang" element={<Barang />} />
        <Route path="/supplier" element={<Supplier />} />
      </Routes>
    </>
  );
};

export default App;
