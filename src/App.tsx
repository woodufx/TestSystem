import React from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import './App.scss';
import LoginPage from './pages/LoginPage/LoginPage';
import MainPage from './pages/MainPage/MainPage';
import UsersPage from './pages/UsersPage/UsersPage';
import TestPage from './pages/TestPage/TestPage';

function App() {
  return (
    <>
       <Routes>
          <Route path="/mainPage" element={<MainPage/>}>
            <Route path="/mainPage/test" element={<TestPage/>}/>
            <Route path="/mainPage/users" element={<UsersPage/>}/>
          </Route>
          <Route path="/" element={<LoginPage/>} />
          <Route path="*" element={<LoginPage/>} />
       </Routes>
    </>
  );
}

export default App;
