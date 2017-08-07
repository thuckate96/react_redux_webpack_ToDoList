import React from "react"
import ReactDOM from "react-dom"
import {createStore} from "redux"
import {Provider} from "react-redux"
import Home from "./components/Home.js"
import List from "./components/List"
var store = require("./reducers/examples")
ReactDOM.render(
  <Provider store={store}>
    <List/>
  </Provider>,
  document.getElementById("root")
)
