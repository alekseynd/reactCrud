export const GET_INITIAL_STATE          = 'GET_INITIAL_STATE';
export const GET_ITEM_DIRECTORY_DATA   = 'GET_ITEM_DIRECTORY_DATA';
export const DIRECTORIES_SEARCH         = 'DIRECTORIES_SEARCH';
export const GET_ITEM                  = 'GET_ITEM';
export const REDACT_ITEM               = 'REDACT_ITEM';
export const SAVE_CHANGES               = 'SAVE_CHANGES';
export const DELETE_ITEM                = 'DELETE_ITEM';



export function getInitialState() {
    return {
        type: GET_INITIAL_STATE
    };
}


export function getItemsDirectoryList() {
    return {
        type: GET_ITEM_DIRECTORY_DATA
    };
}


export function searchDirectory(text) {
    return {
        type: DIRECTORIES_SEARCH,
        payload: text
    };
}

export function getItem(id) {
    return {
        type: GET_ITEM,
        payload: id
    };
}

export function redactItem(id) {
    return {
        type: REDACT_ITEM,
        payload: id
    };
}

export function saveItem(name, weight, point, endDate, text, units, id) {
    return {
        type: SAVE_CHANGES,
        name: name,
        weight: weight,
        point: point,
        endDate: endDate,
        text: text,
        units: units,
        id: id
    };
}

export function deleteItem(id) {
    return {
        type: DELETE_ITEM,
        id: id
    };
}