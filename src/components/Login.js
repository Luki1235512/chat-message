import { Button } from '@material-ui/core';
import React from 'react';
import "./css/Login.css";
import { auth, provider } from './firebase'

function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error.message))
    }

    return (
        <div className='login'>
            <div className="login__logo">
                <img src="https://www.pinclipart.com/picdir/big/218-2180985_capybara-branding-logo-illustration-dribbble-clipart.png" alt="logo" />
            </div>
            <Button onClick={signIn}>Sign in</Button>
        </div>
    )
}

export default Login;