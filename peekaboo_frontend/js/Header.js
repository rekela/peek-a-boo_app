import React from "react";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import ChildrenList from "./ChildrenList";
import Login from "./Login";
import Kindergarten from "./Kindergarten";
import Calendar from "./Calendar";

const Header = () => {
    const handleClick = () => {
        return(
            <ChildrenList/>
        )
    }
    return(
        <header>
            <div className="container page-header">
                {/*<div>*/}
                {/*    <img src="./assets/logo.png" alt="Logo"/>*/}
                {/*</div>*/}
                <div>
                    <Link to="/"><img src="./assets/logo.png" alt="Logo"/></Link>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/about">Przedszkole</Link>
                        </li>
                        <li>
                            <Link to="/children">Dzieci</Link>
                        </li>
                        <li>
                            <Link to="/calendar">Obecność</Link>
                        </li>
                        <li>
                            <Link to="#">Wydarzenia</Link>
                        </li>
                        <li>
                            <Link to="#">Opłaty</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>

    )
}
export default Header;