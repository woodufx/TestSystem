import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "./mainPage.scss";

const MainPage = () => {
    let navigate = useNavigate();
    const logout = (): void => {
        localStorage.setItem("login", "false");
        navigate("/");
    }
    return (
        <>
        <header className="header">
            <div className="header__inner">
                <div className="header__links">
                    <div className="header__title">Tests Today</div>
                    <Link to="/mainPage/test" className="header__link">Тесты</Link>
                    <Link to="/mainPage/users" className="header__link">Пользователи</Link>
                </div>
            <button className="header__button" onClick={()=> logout()}> Выйти</button>
            </div>
        </header>
        <Outlet/>
        </>
    );
};

export default MainPage;
