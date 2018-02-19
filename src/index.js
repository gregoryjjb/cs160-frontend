import React, {Component} from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import reducer from 'reducers';
import App from 'components/App';

const logger = store => next => action => {
    console.group(action.type)
    console.info('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    console.groupEnd(action.type)
    return result
}

const store = createStore(reducer, applyMiddleware(logger));

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);