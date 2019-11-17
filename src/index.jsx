import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./pages/HomePage.jsx";
import ItemPage from "./pages/ItemPage.jsx";
import { BrowserRouter, Route } from "react-router-dom"; 
import Header from "./components/Header.jsx";

const root = document.getElementById("app");

ReactDOM.render(
    <BrowserRouter>
        <Route path={"/"} component = {Header} /> 
        <Route path="/" exact component={HomePage} />
        <Route path="/items/:itemId" exact component={ItemPage} />
    </BrowserRouter>,
    root
);