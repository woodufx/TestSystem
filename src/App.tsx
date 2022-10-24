import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.scss';
import LoginPage from './pages/LoginPage/LoginPage';
import MainPage from './pages/MainPage/MainPage';

function App() {
  return (
    <>
       <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path="/mainPage" element={<MainPage/>} />
          <Route path="*" element={<LoginPage/>} />
       </Routes>
    </>
  );
}

export default App;
