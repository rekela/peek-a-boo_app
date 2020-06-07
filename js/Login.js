import React from "react";

const mainColor = 'rgb(255,207,65)';
const textColor = '#676767';
const Login = () => {
    return (
        <>
            <div style={{
                backgroundColor: mainColor,
                color: textColor,
                height: 50,
                width: 500
            }}>
                <span>Witaj w peek-a-boo</span>
            </div>
            <div style={{
                height: 300,
                width: 500
            }}>
                <img src={'./assets/akuku_login.jpg'}/>
            </div>
            <div style={{
                backgroundColor: mainColor,
                height: 200,
                width: 500
            }}>
                <form style={{ color: textColor}}>
                    {/*<label>Login</label>*/}
                    <input type="text" name="login" placeholder="username" style={{
                        border: 'none'
                    }} />
                    {/*<label>Hasło</label>*/}
                    <input type="password" name="password" placeholder="password" style={{
                        border: 'none'
                    }}/>
                    <button type="submit">Zaloguj</button>
                </form>
            </div>
        </>
    )
};

export default Login;