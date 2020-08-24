import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';
import state from './../Redusers/rootRedusers';

const store = createStore(state, applyMiddleware(Thunk))

const WithProvider = (props) => {
    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    )
}

export default WithProvider;