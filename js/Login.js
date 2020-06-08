import React from "react";

const Login = () => {
    return (
        <>
            <div className={'title'}>
                <h1>Witaj w peek-a-boo</h1>
            </div>
            <div className={'img-container'}>
                <img src={'./assets/akuku_login.jpg'}/>
            </div>
            <div className={'form-container'}>
                <form>
                    <input className={'form-input'} type="text" name="login" placeholder="username" />
                    <input className={'form-input'} type="password" name="password" placeholder="password" />
                    <button className={'btn'} type="submit">Zaloguj</button>
                </form>
            </div>
        </>
    )
};

export default Login;