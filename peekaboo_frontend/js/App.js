import React, {Component} from "react";
import ReactDOM from "react-dom";
import Login from "./Login";
import Calendar from "./Calendar";
import Kindergarten from "./Kindergarten";
import UsersList from "./UsersList";
import ChildrenList from "./ChildrenList";
import Footer from "./Footer";
import Child from "./Child";
import Header from "./Header";
import ChildrenListItem from "./ChildrenListItem";


const App = () => {
    return(
        <Kindergarten/>

    )
}

ReactDOM.render(<App />, document.getElementById("app"));