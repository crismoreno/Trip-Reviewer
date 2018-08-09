import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';

import reducers from './../reducers'; 

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore);

export default props => (
    <Provider store={createStoreWithMiddleware(reducers)}>
        {props.children}
    </Provider>
);