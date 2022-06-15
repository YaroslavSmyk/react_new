import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Counter from "./Counter.jsx";
// import { BrowserRouter, Route, Switch } from "react-router-dom";



const rootElement = document.querySelector("#root");

ReactDOM.render(<Counter />, rootElement);
