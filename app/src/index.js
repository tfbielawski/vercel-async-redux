import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./reducers/reducers";
import logger from "redux-thunk";
import thunk from "redux-thunk";

//Invoke createStore, pass in reducer and middleware(), pass in thunk and logger
const store = createStore(reducer, applyMiddleware(thunk, logger));


ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
  document.getElementById('root')
);
