import React from "react";

const Child = ({id, first_name, last_name }) => {
    return (
        <li>{`${id} ${first_name} ${last_name}`}</li>
    );
};

export default Child