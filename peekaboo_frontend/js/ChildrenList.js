import React from "react";

const ChildrenList = (props) => {
    console.log(props);
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
                            {props.children.map(child => <li>{child}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ChildrenList;
