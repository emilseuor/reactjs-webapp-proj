import React from "react";
import ReactDOM from "react-dom";
import './css/index.css';
import './css/bootstrap.min.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import store from "./redux/store";


const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
