import React from "react";

const UsersListItem = ({user}) => {
    return(
        <li className={'item'}>{user.username}</li>
    )
}

export default UsersListItem;