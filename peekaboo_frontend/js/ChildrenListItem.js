import React from "react";
import Child from "./Child";

const ChildrenListItem = ({child, details}) => {
    const handleClick = () => {
        details(child);
    }
    return(

        <>
            <li >
                <div>
                    <p>{child.first_name} {child.last_name}</p>
                    <button className={'btn'} onClick={handleClick}>Dane</button>
                </div>
            </li>
        </>

    )
}

export default ChildrenListItem;