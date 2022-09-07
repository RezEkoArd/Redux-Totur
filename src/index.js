import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { createStore , applyMiddleware, compose } from 'redux';
import rootReducer from './reducer/index';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create a Redux Store
let store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

