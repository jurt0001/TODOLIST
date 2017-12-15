
require("./main.scss");

import React from "react";
import { render } from 'react-dom';
import Main from "./components/Main";
import todoList from "./data";
import { createStore } from "redux";
import  reducers  from "./reducer";
import { Provider } from "react-redux"

let state = {
   todoList: todoList
};


let store = createStore(reducers, state, window.devToolsExtension ? window.devToolsExtension() : undefined);

render(
<Provider store={store}>
    
    <Main />
    
    </Provider>,
    document.getElementById("react-app")

)
