import React from "react";
import Child from './Child';
import Header from "./Header";
import Footer from "./Footer";

const ChildrenList = ({children}) => {
    console.log(children);
    return (
        <>
            <Header/>

            <div className={'main-view-container'}>
                <h1 className={'logo'}>Lista dzieci</h1>
                <div className={'main-view'}>
                    <div>
                        <ul>
                            {children.map(child => <li className={'item'} key={child.id}>{child.first_name}</li>)}
                        </ul>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    )
};

export default ChildrenList;
