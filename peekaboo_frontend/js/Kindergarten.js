import React from "react";

const Kindergarten = () => {
    return (
        <>
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

            <div className={'main-view-container'}>
                <h1 className={'logo'}>Twoja Placówka</h1>
                <div className={'main-view'}>
                    <div>Przedszkole A Kuku
                        Osiedle Piastów 21B
                        31-624 Kraków
                    </div>
                </div>
            </div>
            <div className={'form-container'}>

            </div>
        </>
    );
}
export default Kindergarten;
