import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "./mainPage.scss";

const MainPage = () => {
    let navigate = useNavigate();
    const logout = () => {
        localStorage.setItem("login", "false");
        navigate("/");
    }
    return (
        <>
        <header>
            <Link to="/mainPage/test">Tests</Link>
            <Link to="/mainPage/users">Users</Link>
            <button className="button" onClick={()=> logout()}> Выйти</button>
        </header>
        <Outlet/>
        <footer> Tests page 2022 </footer>
        </>
    );
};

export default MainPage;
