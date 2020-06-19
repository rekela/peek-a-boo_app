import React from "react";
import Footer from "./Footer";

const Login = () => {
    const handleClick = () => {
        console.log('button clicked')
    }
    return (
        <>
            <div className={'title-container'}>
                <div>
                    <h1 className={'logo'}>Witaj w peek-a-boo :)</h1>
                </div>
            </div>
            <div className={'main-view-container'}>
                <div className={'img-container'}>
                    <img src={'./assets/akuku_login.jpg'}/>
                </div>
            </div>
            <div className={'form-container'}>
                <form>
                    <h5 className={'popup'}>Podany login lub hasło są nieprawidłowe</h5>
                    <input className={'form-input'} type="text" name="login" placeholder="username" />
                    <input className={'form-input'} type="password" name="password" placeholder="password" />
                    <button onClick={handleClick} className={'btn'} type="submit">Zaloguj</button>
                </form>
            </div>

            <Footer/>
        </>
    )
};

export default Login;