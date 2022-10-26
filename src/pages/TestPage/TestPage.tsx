import React, { useEffect, useState } from "react";
import "./testPage.scss";
import addImage from "../../assets/images/plus-square.png";
import { tests, ITest, IQuestiion, setNewTests } from "../../constants/Tests";
import Modal from "../../components/Modal/Modal";

const TestPage = () => {
    const [currentTests, setTests] = useState<ITest[]>(tests);
    const [modalActive, setModalActive] = useState<boolean>(false);

    useEffect(() => {
        setNewTests(currentTests);
    }, [currentTests])
    
    const addTest = (test: ITest) : void => {
        let copy = [...currentTests];
        copy.push(test);
        setTests(copy);
        setModalActive(!modalActive);
    }
    const changeVisibility = (currentTest: ITest) : void => {
        let updatedTests: ITest[] = currentTests.map((test: ITest) : ITest => {
            if (test.id === currentTest.id) {
                let changedTest = test;
                changedTest.hiden = !changedTest.hiden;
                return changedTest;
            }
            return test;
        });
        setTests(updatedTests);
    }

    const deleteTest = (id: string) : void => {
        let newTests: ITest[] = currentTests.filter(test => test.id !== id);
        setTests(newTests);
    }

    return (
        <div className="tests">
            <Modal active={modalActive} setActive={setModalActive} onSave={(test) => addTest(test) }/>
            <div className="tests__inner">
                <div className="tests__headerline">
                    <div className="tests__title title">Все тесты:</div>
                    <img src={addImage} alt="" className="tests__add" onClick={() => setModalActive(true)}/>
                </div>
                <div className="tests__cards">
                    {
                        currentTests.map(test => (
                            <div className={"tests__card" + (test.hiden === true ? " -hiden" : "")}>
                                <div className="tests__names">
                                    <div className="tests__line">
                                        <div className="tests__info"> Название: </div>
                                        <div className="tests__subtitle"> {test.name}</div>
                                    </div>
                                </div>
                                <div className="tests__themes">
                                    <div className="tests__line">
                                        <div className="tests__info"> Тема: </div>
                                        <div className="tests__subtitle">{test.theme}</div>
                                    </div>
                                </div>
                                <div className="tests__questions">
                                    <div className="tests__line">
                                        <div className="tests__info"> Вопросы: </div>
                                        <div className="tests__subtitle">{test.questionsNumber}</div>
                                    </div>
                                </div>
                                <div className="tests__actions">
                                    <button className="tests__button -hide" onClick={() => changeVisibility(test)}>{test.hiden? "Показать" : "Скрыть"}</button>
                                    <button className="tests__button -delete" onClick={()=> deleteTest(test.id)}>Удалить</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
                
            </div>
        </div>
    );
};

export default TestPage;
