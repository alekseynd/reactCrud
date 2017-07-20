import DirectoriesReducer from './DirectoriesReducer';
import ItemsDirecotoryReducer from './ItemsDirecotoryReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    directoriesReducer: DirectoriesReducer,
    itemsDirecotoryReducer: ItemsDirecotoryReducer,
});

export default rootReducer;