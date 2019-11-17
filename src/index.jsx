import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./HomePage.jsx";
import ItemPage from "./ItemPage.jsx";
import { BrowserRouter, Route } from "react-router-dom"; 

const root = document.getElementById("app");

ReactDOM.render(
    <BrowserRouter>
        <Route path="/" exact component={HomePage} />
        <Route path="/items/:itemId" exact component={ItemPage} />
    </BrowserRouter>,
    root
);