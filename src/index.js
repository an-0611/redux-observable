import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import './index.css';
import App from './App';
import configureStore from './configureStore';

import * as serviceWorker from './serviceWorker';



// console.log('store.getState(): ', store.getState()) // for ssr

const client = {}
const history = {}
const preloadedState = window.INITIAL_STATE;
const store = configureStore(client, history, preloadedState);
// import { createStore } from 'redux'

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
