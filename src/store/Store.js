import rootReducer from '../reducers/RootReducer';

import { createStore, applyMiddleware  } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import logger from 'redux-logger'


export default function configureStore () {
    const store = createStore(rootReducer,  composeWithDevTools(applyMiddleware( thunk, logger)));
    return store;
};
