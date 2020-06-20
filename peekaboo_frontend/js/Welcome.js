import React, {useState} from "react";

const Welcome = () => {

    return (
        <>
            <div className={'welcome'}>
                <div className={'welcome-container'}>
                    <p className={'logo'}>Witaj</p>
                    <p className={'logo'}>username</p>
                    <p className={'logo'}>w peek-a-boo :)</p>
                </div>
            </div>
            <div className={'login-view-container'}>
                <div className={'img-container'}>
                    <img src={'./assets/akuku_login.jpg'}/>
                </div>
            </div>

        </>
    )
};

export default Welcome;