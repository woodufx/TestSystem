import React, { useEffect, useState } from 'react';
import "./modal.scss";
import {ITest, IQuestiion} from "../../constants/Tests";

export interface ModalProps {
    active: boolean,
    setActive: any,
    onSave:(test: ITest) => void;
}

function Modal(props: ModalProps) {

  const [checked, setChecked] = useState<number>(0);
  const [answers, setAnswers] = useState({firstAnswr:"", secondAnswr:"", thirdAnswr:"", fourthAnswr:""});
  const [name, setName] = useState<string>("");
  const [theme, setTheme] = useState<string>("");
  const [question, setQuestion] = useState<string>("");
  const [qstCount, setQstCount] = useState<number>(1);
  const [questions, setQuestions] = useState<IQuestiion[]>([]);
  const [newTest, setNewTest] = useState<ITest>();

  const saveTest = (): void => {
    let id: string = "id" + Math.random().toString(16).slice(2);
    let currentTest: ITest = {"id": id, "hiden": false, "name": name, "theme": theme,"questionsNumber": qstCount-1, "questions": questions};
    setNewTest(currentTest);
    props.onSave(currentTest);
    resetQuestions();
    alert(`Тест ${currentTest.name} успешно добавлен!`)
  }

  const addQuestion = () => {
    if (qstCount >= 16) {
      alert("Нельзя добавлять больше 15 вопросов!");
      return;
    }
    let currentQuestions: IQuestiion = {"questionName": question, "answers" :  Object.values(answers), "trueAnswer" : Object.values(answers)[checked]};
    let copy = [...questions];
    copy.push(currentQuestions);
    setQuestions(copy);
    setQstCount(qstCount+1);
    resetAnswers();
  }
  
  const resetAnswers = () :void => {
    setChecked(0);
    setQuestion("");
    setQstCount(qstCount+1);
    setAnswers({firstAnswr:"", secondAnswr:"", thirdAnswr:"", fourthAnswr:""});
  }

  const resetQuestions = () :void => {
    setChecked(0);
    setQstCount(1);
    setAnswers({firstAnswr:"", secondAnswr:"", thirdAnswr:"", fourthAnswr:""});
    setName("");
    setTheme("");
    setQuestion("");
  }

  return (
    <>
      <div className={props.active ? "modal -active" : "modal"} onClick={() => props.setActive(false)}>
        <div className={props.active ? "modal__content -active" : "modal__content"} onClick={(e) => e.stopPropagation()}>
          <div className="modal__title title"> Создание нового теста </div>
          <div className="modal__line">
            <div className="modal__header">Название:</div>
            <input type="text" className="modal__input" value={name} onChange={(e)=> setName(e.target.value)}/>
          </div>
          <div className="modal__line">
            <div className="modal__header">Тема:</div>
            <input type="text" className="modal__input" value={theme} onChange={(e)=> setTheme(e.target.value)}/>
          </div>
          <div className="modal__line">
            <button className="modal__button -add" onClick={()=> addQuestion()}> Добавить вопрос</button>
          </div>
          {qstCount !== 0 && 
          <div className="modal__questions">
            <div className="modal__line">
              <div className="modal__header">Вопрос:</div>
              <input type="text" className="modal__input -question" value={question} onChange={(e)=> setQuestion(e.target.value)}/>
            </div>
            <div className="modal__answers">
              <form className="modal__answer_inputs">
                <input type="text" className="modal__input" value={answers.firstAnswr} onChange={(e) => setAnswers({...answers, firstAnswr: e.target.value})}/>
                <input type="text" className="modal__input" value={answers.secondAnswr} onChange={(e) => setAnswers({...answers, secondAnswr: e.target.value})}/>
                <input type="text" className="modal__input" value={answers.thirdAnswr} onChange={(e) => setAnswers({...answers, thirdAnswr: e.target.value})}/>
                <input type="text" className="modal__input" value={answers.fourthAnswr} onChange={(e) => setAnswers({...answers, fourthAnswr: e.target.value})}/>
              </form>
              <form className="modal__answer_radios">
                <input type="radio" checked={checked === 0} className="modal__input" onChange={() => setChecked(0)}/>
                <input type="radio" checked={checked === 1} className="modal__input" onChange={() => setChecked(1)}/>
                <input type="radio" checked={checked === 2} className="modal__input" onChange={() => setChecked(2)}/>
                <input type="radio" checked={checked === 3} className="modal__input" onChange={() => setChecked(3)}/>
              </form>
            </div>
            <div className="modal__header">Количество вопросов: {qstCount-1}</div>
            <button className={"modal__button" + ( qstCount >= 5   ? " -save" : " -blocked")} disabled={qstCount >= 5 ? false : true} onClick={()=> saveTest()}> Сохранить тест</button>
            <button className="modal__button -cancel" onClick={() => resetQuestions()}> Отменить</button>
          </div>
}
        </div>
      </div>
    </>
  );
}

export default Modal;
