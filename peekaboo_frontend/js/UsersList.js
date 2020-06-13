import React from "react";

const UsersList = (props) => {
    console.log(props);
    return (
        <>
            <div className={'title'}>
                <img src={'./assets/logo.png'} />
            </div>
            <div className={'form-container'}>
                <div>
                    <h1>Lista użytkowników</h1>
                    <div>
                        <ul>
                            {props.users.map(user => <li>{user}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
};

export default UsersList;
