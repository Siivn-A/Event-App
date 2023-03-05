import React, { useEffect, useState } from 'react';
import {VscSignOut} from 'react-icons/vsc';
import classes from './Login.module.css'
function Login({getAuthLogin, getAuthLogout}) {

    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);

    function handleCallbackResponse(response){
        console.log("jwt: ", response.credential);
        setShowloginButton(false);
        setShowlogoutButton(true);
        getAuthLogin();

    }
    useEffect(()=>{
        /* global google */
        google.accounts.id.initialize({
            client_id: "402307794715-emunss2upfo5s9ldahoo4ublnk3596ti.apps.googleusercontent.com",
            callback: handleCallbackResponse
        })
        google.accounts.id.renderButton(
            document.getElementById('signInDiv'),
            { theme: "outline", size: "large"}
        )

        google.accounts.id.prompt();
    }, [])

    function onSignoutSuccess(){
        getAuthLogout();
        setShowlogoutButton(false);
        setShowloginButton(true);
    }
    return (
        <div>
            { showloginButton ?
                <div className={classes.button} id='signInDiv' /> : null}

            { showlogoutButton ?
                <button className={classes.button}  onClick={onSignoutSuccess}>
                <VscSignOut/> 
                </button>
                : null
            }
        </div>
    );
}
export default Login;