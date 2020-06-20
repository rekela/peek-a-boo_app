import React from "react";
import Child from "./Child";

const ChildrenListItem = ({child, details}) => {
    const handleClick = () => {
        details(child);
    }
    return(
        <>
            <tr>
                <td>{child.id}</td>
                <td>{child.first_name} {child.last_name}</td>
                <td>{child.team_name}</td>
                <td><button className={'btn'} onClick={handleClick}>Dane</button></td>
            </tr>
        </>

        // <>
        //     <div className={'item'}>
        //             {child.first_name} {child.last_name}, {child.team_name}
        //             <button className={'btn'} onClick={handleClick}>Dane</button>
        //     </div>
        // </>

    )
}

export default ChildrenListItem;