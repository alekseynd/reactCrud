import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import DirectoriesList from './components/pages/directories_list/DirectoriesList';
import NotFoundPage from './components/pages/service__pages/NotFoundPage';

import ItemsTypesList from './components/pages/item_types__list/ItemsTypesList';
import ItemsRedactorContainer from './containers/ItemsRedactorContainer';
import registerServiceWorker from './registerServiceWorker';


import configureStore from './store/Store';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

let store = configureStore();

ReactDOM.render(
    <div className="general_wrapper">
        <Provider store={store}>
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={DirectoriesList} />
                    <Route path="directory/1" component={ItemsTypesList} />
                    <Route path="itemredactor/(:id)" component={ItemsRedactorContainer} />
                    <Route path="**" component={NotFoundPage} />
                </Route>
            </Router>
        </Provider>
    </div>,
    document.getElementById('root')
);
registerServiceWorker();
