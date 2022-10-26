export interface ITest  {
    id: string,
    name: string,
    theme: string,
    questionsNumber?: number,
    hiden: boolean,
    questions: IQuestiion[]
}

//будем проверять правильность ответа как соответствие ответа пользователя и правильного ответа, чтобы не показывать через иное свойство через просмотр в DevTool (против списывания)
export interface IQuestiion {
    questionName: string,
    answers: string[],
    trueAnswer: string
}

export let tests: ITest[] = [
    
    { "id": "0", "name": "Как хорошо ты знаешь Гарри Поттера", "theme": "Фильмы", "questionsNumber": 4, "hiden": false,"questions": [
        {"questionName": "Как звали главного героя", "answers": ["Хагрид", "Гарри", "Арчи", "Фиона"], "trueAnswer": "Гарри"},
        {"questionName": "Сколько частей в фильме", "answers": ["7", "4", "8", "6"], "trueAnswer": "8"},
        {"questionName": "Какой Патронус у Гарри Поттера?", "answers": ["Лев", "Тигр", "Дракон", "Пес"], "trueAnswer": "Пес"},
        {"questionName": "Чего боится Василиск", "answers": ["Лучей", "Отражения", "Гиппогрифов", "ПЕНИЯ"], "trueAnswer": "Отражения"}
    ]},

    { "id": "1", "name": "Арифметика для детей", "theme": "Образование", "questionsNumber": 4, "hiden": true,"questions": [
        {"questionName": "2+2=?", "answers": ["4", "5", "6", "7"], "trueAnswer": "4"},
        {"questionName": "7*7=?", "answers": ["21", "49", "23", "44"], "trueAnswer": "49"},
        {"questionName": "12-4=?", "answers": ["4", "5", "1", "8"], "trueAnswer": "8"},
        {"questionName": "21/7=?", "answers": ["3", "4", "5", "2"], "trueAnswer": "3"}
    ]},

    { "id": "2", "name": "Тесты на развитие", "theme": "Общие", "questionsNumber": 4, "hiden": false,"questions": [
        {"questionName": "Сколько времен года?", "answers": ["4", "5", "6", "7"], "trueAnswer": "4"},
        {"questionName": "Какого цвета трава?", "answers": ["Серая", "Зеленая", "Розовая", "Красная"], "trueAnswer": "Зеленая"},
        {"questionName": "Какова плотность воды?", "answers": ["1000", "2100", "4200", "3500"], "trueAnswer": "1000"},
        {"questionName": "Формула для площади прямоугольника?", "answers": ["(a+b)/2", "a*b", "(a_b)*2", "a*b+a+b"], "trueAnswer": "a*b"}
    ]}
];

export const setNewTests = (newTests: ITest[]): void => {
    tests = newTests;
}
