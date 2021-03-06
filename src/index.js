import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise";
import './index.css';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css'

import rootReducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducers)}><App /></Provider>,
  document.getElementById('root')
);