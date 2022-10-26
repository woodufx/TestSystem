import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./loginPage.scss";
import { adminData } from "../../constants/Config";


const LoginPage = () => {

    let navigate = useNavigate();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const authorization = () => {
        localStorage.setItem("login", "true");
        navigate("/mainPage/test");
    }
    const validateForm = (login: string, password: string) => {
        (adminData.login === login && adminData.password === password) ? authorization() : alert("Неверный логин или пароль!");
    }


    return (
        <div className="login-form">
            <div className="login-form__inner">
                <div className="login-form__title"> Войти</div>
                <div className="login-form__line">
                    <div className="login-form__subtitle"> Логин </div>
                    <input type="text"  value={login} placeholder="Ваш логин" className="login-form__input" onChange={(e) => setLogin(e.target.value)}/>
                </div>
                <div className="login-form__line">
                    <div className="login-form__subtitle"> Пароль</div>
                    <input type="password" value={password} placeholder="Ваш пароль" className="login-form__input" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button className="login-form__button" onClick={()=> {
                    validateForm(login, password);
                }}>Войти</button>
            </div>
        </div>  
    );
};

export default LoginPage;
