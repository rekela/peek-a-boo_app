import React, {useState} from "react";
import UsersListItem from "./UsersListItem";
import Header from "./Header";
import Footer from "./Footer";

const UsersList = () => {
    const [users, setUsers] = useState([]);
    const url = 'http://127.0.0.1:8000/users-list/';
    fetch(url).then(response => {
        return response.json();
    }).then(obj => {
        setUsers(obj);
    })
    return (

        <>
            <Header/>

            <div className={'main-view-container'}>
                <h1 className={'logo'}>Lista użytkowników</h1>
                <div className={'main-view'}>
                    <div>
                        <ul className={'item'}>
                            {users.map(user => <UsersListItem key={user.id} user={user} />)}
                        </ul>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    )
};

export default UsersList;
