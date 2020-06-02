import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// import {createStore , applyMiddleware , combineReducers } from "redux" ;
// import {Provider} from "react-redux";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";

// import logReducer from "./store/reducers/LoginReducer"; 

// const rootReducer = combineReducers({
//   Log: logReducer
// });

// let store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// )


ReactDOM.render(
  // <Provider store={store}>
  //   <App />
  // </Provider>,
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);