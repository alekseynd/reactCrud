import { GET_ITEM_DIRECTORY_DATA, GET_INITIAL_STATE } from '../actions/ItemActions';
import { DIRECTORIES_SEARCH, REDACT_ITEM } from '../actions/ItemActions';
import { GET_ITEM, SAVE_CHANGES, DELETE_ITEM } from '../actions/ItemActions';

let inititalState = {
    "id": 1,
    "name": "Типы ошибок",
    "fields": [
        {
            "id": "name",
            "name": "Наименование",
            "type": "TEXT"
        },
        {
            "id": "weight",
            "name": "Тяжесть",
            "type": "INTEGER"
        },
        {
            "id": "point",
            "name": "Балл",
            "type": "FLOAT"
        },
        {
            "id": "endDate",
            "name": "Действует до",
            "type": "DATE"
        }
    ],
    "items": [
        {
            "id": 1,
            "name": "Грамматическая ошибка",
            "weight": 1,
            "point": 0.25,
            "endDate": "12.02.2015",
            "text": "12.02.2015",
            "units": "12.02.2015"
        },
        {
            "id": 2,
            "name": "Ошибка резидента",
            "weight": 1,
            "point": 0.25,
            "endDate": "12.02.2015",
            "text": "12.02.2015",
            "units": "12.02.2015"
        },
        {
            "id": 3,
            "name": "Обычная такая ошибка, стандартная",
            "weight": 0,
            "point": 0.25,
            "endDate": "12.02.2015",
            "text": "12.02.2015",
            "units": "12.02.2015"

        },
        {
            "id": 4,
            "name": "Не ошибка",
            "weight": 2,
            "point": 0.25,
            "endDate": "12.02.2015",
            "text": "12.02.2015",
            "units": "12.02.2015"
        },
        {
            "id": 5,
            "name": "Ерунда, а не ошибка",
            "weight": 12,
            "point": 0.25,
            "endDate": "12.02.2015",
            "text": "12.02.2015",
            "units": "12.02.2015"
        },
        {
            "id": 6,
            "name": "Ошибка новичка",
            "weight": 2,
            "point": 0.25,
            "endDate": "12.02.2015",
            "text": "12.02.2015",
            "units": "12.02.2015"
        },
        {
            "id": 7,
            "name": "Стратегическая ошибка",
            "weight": 1,
            "point": 0.25,
            "endDate": "12.02.2015",
            "text": "12.02.2015",
            "units": "12.02.2015"
        },
        {
            "id": 8,
            "name": "Просто ошибка, без прилагательных, в две строки",
            "weight": 2,
            "point": 0.25,
            "endDate": "12.02.2015",
            "text": "12.02.2015",
            "units": "12.02.2015"
        },
        {
            "id": 9,
            "name": "Ошибка",
            "weight": 3,
            "point": 0.25,
            "endDate": "12.02.2015",
            "text": "12.02.2015",
            "units": "12.02.2015"
        },
        {
            "id": 10,
            "name": "Ошибка 22",
            "weight": 2,
            "point": 0.25,
            "endDate": "12.02.2015",
            "text": "12.02.2015",
            "units": "12.02.2015"
        },
        {
            "id": 11,
            "name": "Замечание",
            "weight": 3,
            "point": 0.25,
            "endDate": "",
            "text": "12.02.2015",
            "units": "12.02.2015"
        }
    ]
};



const errors_list= (state = {...inititalState, redactedItem: {}, searcedItems: []}, action ) => {
    switch (action.type){


        case GET_ITEM_DIRECTORY_DATA:
            let newState = Object.assign({}, state);
            newState.items = state.items || [];
            newState.searcedItems = state.items || [];
            newState.fields = state.fields || [];
            return newState;
            break;
        case DIRECTORIES_SEARCH:
            let regExpSearch = new RegExp(action.payload, 'i');
            newState = Object.assign({}, state);
            if (action.payload === '') {
                newState.searcedItems = state.items.slice();
                return newState;
            }
            newState.searcedItems = state.items.filter(item => {
                return regExpSearch.test(item.name)
            });
            return newState;
            break;
        case GET_ITEM:
            newState = Object.assign({}, state);
            newState.items = state.items || [];
            newState.fields = state.fields || [];
            if(action.payload) {
                for(let i = 0; i < state.items.length; i++ ) {
                    console.log(action.payload)
                    if (newState.items[i]['id'] == action.payload) {
                        newState.redactedItem = Object.assign({}, state.items[i]);
                    }
                }
            }
            return newState;
            break;
        case SAVE_CHANGES:
            if(action.id) {
                state.items = state.items.map(item =>
                    item.id === action.id ?
                        {...item, name: action.name, weight: action.weight, point: action.point, endDate: action.endDate, text: action.text, units: action.units} : item
                )
            }
            else {
                console.warn('action id is not def');
                let newItem = {
                    "id": inititalState.items.length + 1,
                    "name": action.name,
                    "weight": action.weight,
                    "point": action.point,
                    "endDate": action.endDate,
                    "text": action.text,
                    "units": action.units
                };
                state.items = [...state.items, newItem];
            }

            return state;
        case DELETE_ITEM:
            if(action.id) {
                state.items = state.items.filter(item =>
                    item.id === action.id ?
                           false : item
                );
            }
            // deleteFromFBFulfilled
            // let _deleteCurrentMonth = action.currentMonth;
            // newState.timeLine[_deleteCurrentMonth] = Object.assign({},
            //     newState.timeLine[_deleteCurrentMonth],
            //     {'total': action.totalTasks},
            //     {'done': action.doneTasks}
            // );
            // return newState;
            return state;
        default:
            return state
    }
};

export default errors_list;
