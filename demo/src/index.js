import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {render} from 'react-dom';
import {createStore, compose, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import App from './components/Demo';
import {reducer as notificationsReducer} from '../../src/index';

// store
const createStoreWithMiddleware = compose(applyMiddleware(thunk))(createStore);
const store = createStoreWithMiddleware(combineReducers({
  notifications: notificationsReducer
}), {});

// render
render(
  <Provider store={store}>
    <App/>
  </Provider>
  ,
  document.getElementById('root')
);