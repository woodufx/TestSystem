import React, { useState } from "react";
import "./usersPage.scss";
import {users, IUser, IResolvedTest, IAttempt} from "../../constants/Users";
import UserCard from "../../components/UserCard/UserCard";

const UsersPage = () => {
    return (
        <div className="users">
            <div className="users__inner">
                <div className="users__title title">Статистика по пользователям:</div>
                <div className="users__cards">
                    {
                        users.map((user)=>  
                            <UserCard user={user} tests={user.resolvedTests} id={user.id}/>
                            )
                    }
                </div>
            </div>
        </div>  
    );
};

export default UsersPage;
