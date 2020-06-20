import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Child = ({child, setDetailsHandler}) => {
    return (
        <>
            <div className={'main-view-container2'}>
                <h1 className={'logo'}>Dane dziecka</h1>
                <div className={'main-view2'}>
                    <h1>{child.first_name} {child.last_name}</h1>
                    <button className={'btn'} onClick={()=> setDetailsHandler(null)}>Zamknij</button>
                </div>
            </div>

        </>
    );
};

export default Child