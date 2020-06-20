import React, {Component, useState} from "react";
import ReactDOM from "react-dom";
import {
    Route,
    Switch,
    BrowserRouter as Router,
} from 'react-router-dom';

import Login from "./Login";
import Welcome from "./Welcome";
import Calendar from "./Calendar";
import Kindergarten from "./Kindergarten";
import UsersList from "./UsersList";
import ChildrenList from "./ChildrenList";
import Footer from "./Footer";
import Child from "./Child";
import Header from "./Header";
import ChildrenListItem from "./ChildrenListItem";


const App = () => {

    const [isLogged, setIsLogged] = useState(false);

    const renderApp = () => {
        return (
            <Router>
            <>
                <Header/>

                <Switch>
                    <Route exact path="/">
                        <Welcome/>
                    </Route>
                    <Route exact path="/about">
                        <Kindergarten/>
                    </Route>
                    <Route exact path="/children">
                        <ChildrenList/>
                    </Route>
                    <Route exact path="/calendar">
                        <Calendar/>
                    </Route>
                </Switch>
                <Footer/>
            </>

            </Router>
        )
    }

    return isLogged ? renderApp() : <Login onLoginSuccess={setIsLogged}/>;
}

ReactDOM.render(<App />, document.getElementById("app"));