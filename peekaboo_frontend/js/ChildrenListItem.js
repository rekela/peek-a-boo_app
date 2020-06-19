import React from "react";

const ChildrenListItem = ({child}) => {
    return(
        <li>{child.first_name} {child.last_name}</li>
    )
}

export default ChildrenListItem;