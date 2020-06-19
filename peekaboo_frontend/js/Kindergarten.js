import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Kindergarten = () => {
    return (
        <>
            <Header/>

            <div className={'main-view-container'}>
                <h1 className={'logo'}>Twoja Placówka</h1>
                <div className={'main-view'}>
                    <div>Przedszkole A Kuku
                        Osiedle Piastów 21B
                        31-624 Kraków
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    );
}
export default Kindergarten;
