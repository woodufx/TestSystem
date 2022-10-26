export interface IUser {
    id: string,
    name: string,
    resolvedTests: IResolvedTest[]
}

export interface IResolvedTest {
    id: string,
    name: string,
    attempts: IAttempt[]
}

export interface IAttempt {
    id: string,
    date: string,
    time: string,
    timeSpent: number,
    correctAnswers: number
}

export let users : IUser[] = [
    {"id": "1", "name": "Квасов Денис", "resolvedTests": [
        {"id":"0", "name": "Как хорошо ты знаешь Гарри Поттера", "attempts": [
            {"id": "1", "date":"25.10.2022", "time": "14:00", "timeSpent": 21, "correctAnswers": 2},
            {"id": "2", "date":"25.10.2022", "time": "15:00", "timeSpent": 15, "correctAnswers": 3},
            {"id": "3", "date":"25.10.2022", "time": "16:00", "timeSpent": 14, "correctAnswers": 4},
        ]},
        {"id":"1", "name": "Арифметика для детей", "attempts": [
            {"id": "1", "date":"22.10.2022", "time": "12:00", "timeSpent": 21, "correctAnswers": 3},
            {"id": "1", "date":"23.10.2022", "time": "13:00", "timeSpent": 15, "correctAnswers": 3},
            {"id": "1", "date":"24.10.2022", "time": "17:00", "timeSpent": 14, "correctAnswers": 4},
        ]}
    ]},

    {"id": "2", "name": "Гощанов Олег", "resolvedTests": [
        {"id":"0", "name": "Как хорошо ты знаешь Гарри Поттера", "attempts": [
            {"id": "1", "date":"5.09.2022", "time": "14:00", "timeSpent": 54, "correctAnswers": 0},
            {"id": "2", "date":"6.09.2022", "time": "15:00", "timeSpent": 32, "correctAnswers": 1},
            {"id": "3", "date":"25.10.2022", "time": "16:00", "timeSpent": 41, "correctAnswers": 4},
        ]},
        {"id":"1", "name": "Арифметика для детей", "attempts": [
            {"id": "1", "date":"22.10.2022", "time": "12:00", "timeSpent": 21, "correctAnswers": 3},
            {"id": "3", "date":"24.10.2022", "time": "17:00", "timeSpent": 44, "correctAnswers": 4},
        ]},
        {"id":"2", "name": "Тесты на развитие", "attempts": [
            {"id": "1", "date":"22.10.2022", "time": "12:00", "timeSpent": 71, "correctAnswers": 1},
            {"id": "2", "date":"23.10.2022", "time": "13:00", "timeSpent": 45, "correctAnswers": 1},
            {"id": "3", "date":"24.10.2022", "time": "17:00", "timeSpent": 54, "correctAnswers": 2},
            {"id": "5", "date":"27.10.2022", "time": "19:30", "timeSpent": 64, "correctAnswers": 4},
        ]}
    ]},

    {"id": "3", "name": "Малышев Артур", "resolvedTests": [
        {"id":"0", "name": "Как хорошо ты знаешь Гарри Поттера", "attempts": [
            {"id": "1", "date":"21.12.2021", "time": "14:21", "timeSpent": 54, "correctAnswers": 0},
            {"id": "2", "date":"6.06.2021", "time": "15:43", "timeSpent": 65, "correctAnswers": 1},
            {"id": "3", "date":"25.11.2021", "time": "12:00", "timeSpent": 21, "correctAnswers": 4},
        ]},
        {"id":"2", "name": "Тесты на развитие", "attempts": [
            {"id": "1", "date":"22.10.2021", "time": "12:00", "timeSpent": 71, "correctAnswers": 1},
            {"id": "2", "date":"23.10.2021", "time": "13:00", "timeSpent": 45, "correctAnswers": 1},
            {"id": "3", "date":"24.10.2021", "time": "17:00", "timeSpent": 54, "correctAnswers": 2},
            {"id": "4", "date":"27.10.2021", "time": "19:30", "timeSpent": 64, "correctAnswers": 4},
        ]}
    ]}
];
