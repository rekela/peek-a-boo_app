import React from "react";

const Header = () => {
    return(
        <header>
            <div className="container page-header">
                <div>
                    <img src="./assets/logo.png" alt="Logo"/>
                </div>
                <nav>
                    <ul>
                        <li>
                            <a href="#">Przedszkole</a>
                        </li>
                        <li>
                            <a href="#">Dzieci</a>
                        </li>
                        <li>
                            <a href="#">Obecność</a>
                        </li>
                        <li>
                            <a href="#">Wydarzenia</a>
                        </li>
                        <li>
                            <a href="#">Opłaty</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Header;