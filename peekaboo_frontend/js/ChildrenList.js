import React from "react";
import Child from './Child';

const ChildrenList = ({children}) => {
    console.log(children);
    return (
        <>
            <div className={'title'}>
                <img src={'./assets/logo.png'} />
            </div>
            <div className={'form-container'}>
                <div>
                    <h1>Lista dzieci</h1>
                    <div>
                        <ul>
                            {children.map(child => <li>{child.id}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ChildrenList;
