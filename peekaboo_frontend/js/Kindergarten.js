import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Kindergarten = () => {
    return (
        <>
            <Header/>

            <div className={'main-view-container'}>
                {/*<div className={'welcome'}>*/}
                {/*    <h1 className={'logo'}>Witaj ... w peek-a-boo :)</h1>*/}
                {/*</div>*/}

                <h1 className={'logo'}>Twoja Placówka</h1>
                <div className={'main-view'}>
                    <div>
                        <h3>Przedszkole A Kuku</h3>
                        <div className={'data-container'}>
                            <div>Osiedle Piastów 21B</div>
                            <div>31-624 Kraków</div>
                            <div>Tel.: 790 538 050</div>
                            <div>E-mail: biuro@przedszkole-akuku.pl</div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    );
}
export default Kindergarten;
