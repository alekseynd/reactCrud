import {DIRECTORIES_FETCH} from '../actions/DirectoriesAction';

let inititalState = [
        {
            "id": 1,
            "name": "Типы ошибок",
            "icon": "iconTh"
        },
        {
            "id": 2,
            "name": "Коды ошибок",
            "icon": "iconCogs"
        },
        {
            "id": 3,
            "name": "Коды благонадежности",
            "icon": "iconThumbsUp"
        },
        {
            "id": 4,
            "name": "Библиотека тестов",
            "icon": "iconBook"
        },
        {
            "id": 5,
            "name": "Оповещения",
            "icon": "iconComment"
        },
        {
            "id": 6,
            "name": "Нормативные обработки заявки",
            "icon": "iconCogs"
        },
        {
            "id": 7,
            "name": "Кредитные продукты",
            "icon": "iconCreditCard"
        },
        {
            "id": 8,
            "name": "Оценки АР",
            "icon": "iconBarChart"
        },
        {
            "id": 9,
            "name": "Реестр средних значений",
            "icon": "iconInbox"
        }
];


const direcotires = (state = inititalState, action ) => {

    switch (action.type){
        case DIRECTORIES_FETCH:
            return [...state];
        default:
            return state
    }
};

export default direcotires;
