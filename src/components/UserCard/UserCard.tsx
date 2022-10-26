import React, { useState } from "react";
import "./userCard.scss";
import {IUser, IResolvedTest, IAttempt} from "../../constants/Users";
import { tests, ITest} from "../../constants/Tests";
import Dropdown from "../Dropdown/Dropdown";

export interface UserProps {
    user: IUser,
    tests: IResolvedTest[],
    id: string
}

const UserCard = (props: UserProps) => {

    const [active, setActive] = useState<string>("");
    const [attempts, setAttempts] = useState<IAttempt[]>();
    const [numberAttempts, setNumberAttempts] = useState<number>(0);
    const [successfullNumber, setSuccesfulNumber] = useState<number>(0);
    const [succesfullTestsString, setSuccesfulTestsString] = useState<string>("");
    const [averageScore, setAverageScore] = useState<number>(0);
    const userTests: string[] = props.tests.map((test) => test.name);

    const getAttempts = (testName: string) : IAttempt[] => {
        let currentTest: IResolvedTest = props.user.resolvedTests.filter(test => test.name === testName)[0];
        setAttempts(currentTest.attempts);
        return currentTest.attempts;
    }

    const getNumberOfAttempts = (testName: string) : void => {
        let currentTest: IResolvedTest = props.user.resolvedTests.filter(test => test.name === testName)[0];
        setNumberAttempts(currentTest.attempts.length);
    }

    const getNumberOfSuccessfull = (testName: string) : void => {
        let currentMainTest: ITest = tests.filter(test => test.name === testName)[0];
        let currentTest: IResolvedTest = props.user.resolvedTests.filter(test => test.name === testName)[0];
        let answersMainTest: number = currentMainTest.questionsNumber!;
        let succesfullTests: number = currentTest.attempts.filter(attempt => attempt.correctAnswers === answersMainTest).length;
        setSuccesfulTestsString(succesfullTests.toString() + " / " + currentTest.attempts.length.toString())
        setSuccesfulNumber(succesfullTests/currentTest.attempts.length);
    }

    const getAverageScore = (testName: string) : void => {
        let currentMainTest: ITest = tests.filter(test => test.name === testName)[0];
        let answersMainTest: number = currentMainTest.questionsNumber!;
        let sum: number = 0;
        for (let i = 0; i < getAttempts(testName).length; i++) {
            sum += getAttempts(testName)[i].correctAnswers/answersMainTest;
        };
        setAverageScore(sum/getAttempts(testName).length);
    }

    const getStats = (testName: string) : void => {
        setActive(testName);
        getAttempts(testName);
        getNumberOfAttempts(testName);
        getNumberOfSuccessfull(testName);
        getAverageScore(testName);
    }
    
    return (
        <div className="users__card">
            <div className="users__top">
                <div className="users__line">
                    <div className="users__header">Имя:</div>
                    <div className="users__name">{props.user.name}</div>
                </div>
                <div className="users__dropdown"> <Dropdown selected={active} options={userTests} setSelected={(option: any) => getStats(option)}/> </div>
            </div>
            {active && 
                <div className="users__bottom">
                    <div className="users__stats">
                        <div className="users__stat">
                            <div className="users__header">Число попыток:</div>
                            <div className="users__name">{numberAttempts}</div>
                        </div>
                        <div className="users__stat">
                            <div className="users__header">Успешно пройдены:</div>
                            <div className="users__name">{succesfullTestsString + " тестов, это " + (successfullNumber*100).toFixed(2) + "%"}</div>
                        </div>
                        <div className="users__stat">
                            <div className="users__header">Средний балл:</div>
                            <div className="users__name">{averageScore.toFixed(2)}</div>
                        </div>
                    </div>
                    <div className="users__hr"></div>
                    <div className="users__attempts">
                        {
                            attempts?.map( attempt => 
                                <div className="users__attempt">
                                    <div className="users__line">
                                        <div className="users__header">Время начала теста:</div>
                                        <div className="users__name">{attempt.date + " " + attempt.time}</div>
                                    </div>
                                    <div className="users__line">
                                        <div className="users__header">Время на прохождеие:</div>
                                        <div className="users__name">{attempt.timeSpent}</div>
                                    </div>
                                    <div className="users__line">
                                        <div className="users__header">Правильные ответы:</div>
                                        <div className="users__name">{attempt.correctAnswers}</div>
                                    </div>
                                </div>
                                )
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export default UserCard;
