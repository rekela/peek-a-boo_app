import React, {useState} from "react";

const Login = ({ onLoginSuccess }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")

    const handleUsername = (e) => {
        setUsername(e.target.value)
        console.log(username)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
        console.log(password)
    }

    const handleClick = () => {
        onLoginSuccess(true);
    }
    return (
        <>
            <div className={'title-container'}>
                <div>
                    <h1 className={'logo'}>Witaj w peek-a-boo :)</h1>
                </div>
            </div>
            <div className={'login-view-container'}>
                <div className={'img-container'}>
                    <img src={'./assets/akuku_login.jpg'}/>
                </div>
            </div>
            <div className={'form-container'}>
                <form>
                    <h5 className={'popup'}>Podany login lub hasło są nieprawidłowe</h5>
                    <input className={'form-input'} type="text" name="login" placeholder="username"
                           value={username} onChange={handleUsername}/>
                    <input className={'form-input'} type="password" name="password" placeholder="password"
                           value={password} onChange={handlePassword}/>
                    <button onClick={handleClick} className={'btn'} type="submit">Zaloguj</button>
                </form>
            </div>

        </>
    )
};

export default Login;