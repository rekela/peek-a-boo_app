import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Child = () => {
    return (
        <>
            <Header/>
            <div className={'main-view-container'}>
                <h1 className={'logo'}>Dane dziecka</h1>
                <div className={'main-view'}>
                    <h1>...... TBD</h1>
                </div>
                {/*<div>{child.first_name} {child.last_name}</div>*/}
            </div>

            <Footer/>
        </>
    );
};

export default Child